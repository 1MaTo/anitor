import { si } from 'nyaapi'
import { NyaaQuery } from '../../../types/nyaa'
import { REDIS_UPSTASH } from '../../../utils/app'
import { DEFAULT_NYAA_SEARCH_TERMS } from '../../../utils/nyaa'

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as NyaaQuery

  console.log('api was requested')
  setResponseHeader(event, 'Cache-Control', 's-maxage=10')
  /*   const storage = useStorage(REDIS_UPSTASH)
  await storage.setItem('test', 'new test 2', { ttl: 5 }) */

  const terms = {
    ...DEFAULT_NYAA_SEARCH_TERMS,
    n: Number(query.count) || DEFAULT_NYAA_SEARCH_TERMS.n,
    term: query.query || DEFAULT_NYAA_SEARCH_TERMS.term,
    sort: query.sortField,
    direction: query.sortOrder
  } as si.SearchOptionsTerm

  try {
    const result = await si.search(terms)
    return result
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message
    })
  }
})
