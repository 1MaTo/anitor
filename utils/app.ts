export const APP_NAME = 'BD checker'
export const APP_DESCRIPTION =
  'Search for torrents with additional info about titles from shikimori.one'

export const REDIS_UPSTASH = 'redis_upstash'

export const CACHE_TTL = {
  'nyaa-search': 60, //  1m
  'mal-search': 60 * 60 * 60 // 1d
}

export const ITEM_LIMITS = {
  TORRENTS: 50,
  MAL_SEARCH_LIMIT: 3
}
