export const APP_NAME = 'Anitor'
export const APP_DESCRIPTION = 'Search for torrents with additional info about titles'
export const APP_DEPLOYMENT_ORIGIN = 'https://anitor.vercel.app'
export const APP_GITHUB = 'https://github.com/1MaTo/anitor'

export const CACHE_TTL = {
  'nyaa-search': 60, //  1m
  'mal-search': 60 * 60 * 60 // 1d
}

export const ITEM_LIMITS = {
  TORRENTS: process.env.NODE_ENV === 'development' ? 5 : 50,
  MAL_SEARCH_LIMIT: 3
}
