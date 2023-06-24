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
    const messsage = error.status === 400 ? `MAL query failed for ${query.query}` : error.message
    throw createError({
      statusCode: 400,
      message: messsage
    })
  }
})
