import { removeUndefinedFields } from './object'
import { MAL } from '~/types/my-anime-list'

export const mal = {
  siteUrl: 'https://myanimelist.net',
  fetch: $fetch.create({
    baseURL: 'https://api.myanimelist.net/v2',
    headers: { 'X-MAL-CLIENT-ID': String(process.env.MAL_CLIENT_ID) }
  }),
  api: {
    animeList: '/anime'
  },
  transformToMALQuery: (query: Partial<MAL.SearchQuery>) =>
    removeUndefinedFields({
      q: query.query,
      fields: query.fields?.join(','),
      limit: query.limit
    }),
  defaultQuery: { limit: 3 } as Partial<MAL.SearchQuery>,

  getSourceLink: (id: string | number) => `${mal.siteUrl}/anime/${id}`,
  getMediaTypeLink: (type: MAL.MediaType) => `${mal.siteUrl}/topanime.php?type=${type}`,
  getSeasonLink: (season: MAL.Season) =>
    `${mal.siteUrl}/anime/season/${season.year}/${season.season}`,
  getStudioLink: (id: string | number) => `${mal.siteUrl}/anime/producer/${id}`,
  getGenreLink: (id: string | number) => `${mal.siteUrl}/anime/genre/${id}`
}
