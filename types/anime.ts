import { MAL } from './my-anime-list'

export type AnimeCardProps = {
  id: string | number
  image: string
  title: string
  description: string
  startDate: Date
  episodes: number
  episodeDuration: number
  mediaType: MAL.MediaType
  startSeason: MAL.Season
  ageRating: MAL.Rating
  airingStatus: MAL.AiringStatus
  studios: MAL.Studio[]
  genres: MAL.Genre[]
  score: number
  scoreCount: number
}
