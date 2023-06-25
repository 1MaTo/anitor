const strings = {
  test: 'English locale',
  'search-torrents': 'Search torrents',
  leecher: 'Leacher | Leachers',
  seeder: 'Seeder | Seeders',
  'upload-date': 'Upload date',
  'torrent-sub-category': 'Torrent subcategory',
  size: 'Size',
  'no-items-found': 'No items found',
  'only-blu-ray': 'BD',
  type: 'Type',
  status: 'Status',
  studio: 'Studio | Studios',
  genre: 'Genre | Genres',
  format: 'Format',
  episode: 'Episode | Episodes',
  minute: 'Minute | Minutes',
  unknown: 'Unknown',
  'anime-suggestions-info': {
    title: 'How this suggestions work',
    steps:
      '1. Clean torrent name from useless words\n2. Using MAL api search for anime (max 3 titles)\n3. Load results in this cards',
    warning:
      'Keep in mind that this results may not be valid in case of very specific torrent name',
    'search-name-title': 'Below is the cleaned name that was used for the search'
  },
  'copied-to-clipboard': 'Copied to clipboard',
  'see-on-shikimori': 'Shikimori',
  'anime-suggestions-tip':
    'This results may not be correct!\nTaking first 3 from search in myanimelist.net',
  'no-anime-found': 'Anime not found',
  'try-again': 'Try again',
  'read-more': 'More',
  'anime-rating': 'Score',
  'anime-score-count': 'User | Users',
  'anime-media-type': {
    unknown: 'Unknown',
    tv: 'TV Series',
    ova: 'OVA',
    movie: 'Movie',
    special: 'Special',
    ona: 'ONA',
    music: 'Music'
  },
  'anime-status': {
    finished_airing: 'Released',
    currently_airing: 'Airing',
    not_yet_aired: 'Planned'
  },
  nyaa: {
    'request-failed': 'Request to Nyaa.si failed',
    'download-torrent': 'Download .torrent',
    'download-magnet': 'Magnet link',
    'all-downloads': 'All downloads',
    trusted: 'Torrents uploaded by trusted users',
    remake:
      "Reencode of original release; Remux of another uploader's original release for hardsubbing and/or fixing purposes; Reupload of original release using non-original file names; Reupload of original release with missing and/or unrelated additional files",
    'sub-category': {
      '1_1': 'AMV (Music video)',
      '1_2': 'English',
      '1_3': 'Non English translated',
      '1_4': 'Raw'
    },
    'torrent-status': {
      success: 'Trusted',
      danger: 'Remake'
    }
  }
}

const functions = {
  'anime-age-rating': {
    g: ({ named }: { named: (str: string) => boolean }) => (named('long') ? 'All Ages' : 'G'),
    pg: ({ named }: { named: (str: string) => boolean }) => (named('long') ? 'Children' : 'PG'),
    pg_13: ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? 'Teens 13 and Older' : 'PG-13',
    r: ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? '17+ (violence & profanity)' : 'R',
    'r+': ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? 'Profanity & Mild Nudity' : 'R+',
    rx: ({ named }: { named: (str: string) => boolean }) => (named('long') ? 'Hentai' : 'Rx')
  } as any
}

export default { ...strings, ...functions }
