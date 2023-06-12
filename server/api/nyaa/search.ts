import { si } from 'nyaapi'
import { DEFAULT_NYAA_SEARCH_TERMS, NyaaQuery } from '../../utils'

export default eventHandler(async (event) => {
  const query = getQuery(event) as NyaaQuery

  const terms = {
    ...DEFAULT_NYAA_SEARCH_TERMS,
    n: Number(query.count) || DEFAULT_NYAA_SEARCH_TERMS.n,
    term: query.query || DEFAULT_NYAA_SEARCH_TERMS.term
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
