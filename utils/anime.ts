import { AnimeCardProps } from '~/types/anime'
import { MAL } from '~/types/my-anime-list'
import { cleanTorrentNameForAnime } from './cleanTorrentName'

export const animeUtils = {
  cleanTorrentName: cleanTorrentNameForAnime,
  cutStringToLimit: (stringToCut: string, limit = 140) => {
    if (stringToCut.length <= limit) return stringToCut

    const stringEndIndex = stringToCut.substring(0, 140).lastIndexOf(' ')
    return stringToCut.substring(0, stringEndIndex)
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

    return `anime-age-rating.${ratingStringKey}`
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
  },
  formatMALtoAnimeCardProps: (data: MAL.AnimeSuggestion) => {
    return {
      id: data.id,
      image: data.main_picture.medium,
      title: data.title,
      description: data.synopsis,
      startDate: new Date(data.start_date),
      episodes: data.num_episodes,
      episodeDuration: Math.round(data.average_episode_duration / 60),
      mediaType: data.media_type,
      startSeason: data.start_season,
      ageRating: data.rating,
      airingStatus: data.status,
      studios: data.studios,
      genres: data.genres,
      score: data.mean,
      scoreCount: data.num_scoring_users
    } as AnimeCardProps
  }
}
