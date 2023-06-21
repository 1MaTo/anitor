const cleanTrashRegexp =
  /(\[.*?\])|(\(.*?\))|(【.*?】)|(\.\w{0,}$)|(★[^ ]*?★)|([「」.]|season|tv|batch|mkv|mp4|\d{3,4}p|x\d\d\d|_|\d{0,1}\d[ -]{0,1}bit|flac|bd|bdmv|blu[ -_]ray|\d+fps)|( {0,1}- {0,1}(\d{2,}){0,})|(e\d*\d+)|( \d\d )/gi

export const cleanNyaaAnimeName = (name: string) => {
  //  Change 'TV-1' like words to 'S01' like words
  const result1 = name.replace(/\[*tv.{0,1}(\d)\]*/i, ' S0$1 ')

  //  Replace all trash things with space
  let result2 = result1.replace(cleanTrashRegexp, ' ')

  //  Change 'S01' like words to number
  const match = result2.match(/\bs(\d+)(e\d+)*\b/i)
  if (match)
    result2 =
      result2.substring(Number(match.index), Number(match.index) + Number(match[0])) +
      Number(match[1])

  //  If name has multiple variants, take only first
  const matchMultiLang = result2.match(/([^-|│–\/\\]+)/gi)
  if (matchMultiLang) result2 = matchMultiLang[0]

  //  Limit string length to 64 (My Anime List API restriction)
  const result3 = result2.replace(/ +/gi, ' ').substring(0, 64).trim()

  return result3
}
