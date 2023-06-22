import { MAL } from '../../../types/my-anime-list'
import { CACHE_TTL } from '../../../utils/app'
import { mal } from '../../../utils/my-anime-list'

export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'Cache-Control', `s-maxage=${CACHE_TTL['mal-search']}`)

  const query = getQuery(event) as MAL.SearchQuery

  try {
    const result = await mal.fetch<MAL.AnimeListResponse>(mal.api.animeList, {
      query: mal.transformToMALQuery({ ...mal.defaultQuery, ...query })
    })
    return result.data.map((data) => data.node)
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message
    })
  }
})
