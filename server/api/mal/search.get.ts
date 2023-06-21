import { CACHE_TTL } from '../../../utils/app'

export default defineEventHandler(async (event) => {
  /*   const query = getQuery(event) as NyaaQuery */

  setResponseHeader(event, 'Cache-Control', `s-maxage=${CACHE_TTL['mal-search']}`)

  const config = useRuntimeConfig()

  try {
    const result = await $fetch(
      'https://api.myanimelist.net/v2/anime?limit=5&fields=alternative_titles&q=In Spectre 2',
      { headers: { 'X-MAL-CLIENT-ID': config.malClientId } }
    )
    return result.data.map((data) => data.node)
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message
    })
  }
})
