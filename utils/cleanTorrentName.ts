const braketsRegExp = /\[.*?\]|\(.*?\)|【.*?】|★.*?★|{.*?}/gi
const torrentPropsRegExp =
  /[^\w\d]+$|[「」]| ?\+ ?([A-Za-z]\w+)+|(vol.?|ep.?)?\d{1,}-\d{1,}|\.[a-zA-Z]\w+$|\bbd(.?(remux|rip|mv|box))?\b|\bblu.?ray\b|batch|extras|x265|10.?bit|(vf.?)?VOSTFR|tokuten|dvd|hevc|mkv|avc|disc box|hdr|flac|complete.series(.?\d\.\d)?|raws?|\d{3,4}p|cd.?box|project complete|season collection|dts-hd|简体内嵌|DBD制作组&极影字幕社|[_ー]|TrueHD(.?\d(\.\d)?)?|\bvol.?\d+\b|\b(sp|tv|dvo|ukr|pcm|vf|av1|complete|gbr|all|subs?)\b|アニメ/gi

const dividerRegExp = / [\\|/／] /gi

const seasonRegExp = /season.?(\d+)|s(\d+)([ne]\d+?)?\b/i
const allSeasonRegExp = /season.?(\d+)|s(\d+)([ne]\d+?)?\b/gi

const squareBraketsRegExp = /\[(.*?)\]/gi
const nonWordEndOfLineRegExp = /[^a-zA-Z]+$/gi

const sortByLengthDesc = (a: string, b: string) => b.length - a.length
const longestWithLimit = (limit: number) => (item: string) => item.length <= limit

const getOneOfNamesWithLimit = (name: string, limit: number) => {
  return name.split(dividerRegExp).sort(sortByLengthDesc).find(longestWithLimit(limit)) || name
}

const extractSeason = (name: string) => {
  const match = name.match(seasonRegExp)

  if (match) {
    const seasonNumber = Number(match[1] || match[2])
    const season = seasonNumber >= 2 ? `season ${seasonNumber}` : undefined
    return { name: name.replace(allSeasonRegExp, ''), season }
  }

  return { name, season: undefined }
}

const getOneInBraketLongest = (name: string) => {
  const cleanFromTorrentProps = name
    .replace(torrentPropsRegExp, ' ')
    .replace(/ +/gi, ' ')
    .trim()
    .replace(/\[ *?\]/gi, '')
  const match = cleanFromTorrentProps.match(squareBraketsRegExp)

  if (!match) return name

  const matchedName = match.sort(sortByLengthDesc)[0]

  if (!matchedName) return name

  return matchedName.replace(/[[\]]/gi, '') || name
}

export const cleanTorrentNameForAnime = (name: string, nameLengthLimit = 64) => {
  const { name: nameWithoutSeason, season } = extractSeason(name)
  const removedTorrentProps = nameWithoutSeason
    .replace(braketsRegExp, ' ')
    .replace(torrentPropsRegExp, ' ')
  const removeSpamSpaces = removedTorrentProps.replace(/ +/gi, ' ').trim()

  let result = removeSpamSpaces

  if (result.length === 0) {
    result = getOneInBraketLongest(nameWithoutSeason)
  }

  if (result.length > nameLengthLimit) {
    result = getOneOfNamesWithLimit(result, nameLengthLimit) || result
  }

  result = result.replace(nonWordEndOfLineRegExp, '')

  if (season) result = `${result} ${season}`

  return result.substring(0, nameLengthLimit)
}
