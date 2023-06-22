import { MAL } from '~/types/my-anime-list'

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
  const matchMultiLang = result2.match(/([^-|│–/\\]+)/gi)
  if (matchMultiLang) result2 = matchMultiLang[0]

  //  Limit string length to 64 (My Anime List API restriction)
  const result3 = result2.replace(/ +/gi, ' ').substring(0, 64).trim()

  return result3
}

export const animeUtils = {
  cutStringToLimit: (stringToCut: string, limit = 140) => {
    if (stringToCut.length <= limit) return stringToCut

    const stringEndIndex = stringToCut.substring(0, 140).lastIndexOf(' ')
    return stringToCut.substring(0, stringEndIndex) + '...'
  },
  getMediaTypeLocaleKey: (type: MAL.MediaType) => {
    switch (type) {
      case MAL.MediaType.Unknown:
        return `anime-media-type.${MAL.MediaType.Unknown}`

      case MAL.MediaType.Tv:
        return `anime-media-type.${MAL.MediaType.Tv}`

      case MAL.MediaType.Ova:
        return `anime-media-type.${MAL.MediaType.Ova}`

      case MAL.MediaType.Movie:
        return `anime-media-type.${MAL.MediaType.Movie}`

      case MAL.MediaType.Special:
        return `anime-media-type.${MAL.MediaType.Special}`

      case MAL.MediaType.Ona:
        return `anime-media-type.${MAL.MediaType.Ona}`

      case MAL.MediaType.Music:
        return `anime-media-type.${MAL.MediaType.Music}`

      default:
        return `anime-media-type.${MAL.MediaType.Unknown}`
    }
  },
  getRatingLocaleKey: (rating: MAL.Rating) => {
    let ratingStringKey = ''
    switch (rating) {
      case MAL.Rating.G:
        ratingStringKey = MAL.Rating.G
        break

      case MAL.Rating.Pg:
        ratingStringKey = MAL.Rating.Pg
        break

      case MAL.Rating.Pg13:
        ratingStringKey = MAL.Rating.Pg13
        break

      case MAL.Rating.R:
        ratingStringKey = MAL.Rating.R
        break

      case MAL.Rating.RPlus:
        ratingStringKey = MAL.Rating.RPlus
        break

      case MAL.Rating.Rx:
        ratingStringKey = MAL.Rating.Rx
        break
    }

    return `anime-rating.${ratingStringKey}`
  },
  getStatusLocaleKey: (status: MAL.AiringStatus) => {
    let ratingStringKey = ''
    switch (status) {
      case MAL.AiringStatus.Finished:
        ratingStringKey = MAL.AiringStatus.Finished
        break

      case MAL.AiringStatus.Ongoing:
        ratingStringKey = MAL.AiringStatus.Ongoing
        break

      case MAL.AiringStatus.Planned:
        ratingStringKey = MAL.AiringStatus.Planned
        break
    }

    return `anime-status.${ratingStringKey}`
  }
}
