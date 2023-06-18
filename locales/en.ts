const strings = {
  test: 'English locale',
  'search-torrents': 'Search torrents',
  leecher: 'Leacher | Leachers',
  seeder: 'Seeder | Seeders',
  'upload-date': 'Upload date',
  'torrent-sub-category': 'Torrent subcategory',
  size: 'Size',
  'no-items-found': 'No items found',
  'only-blue-ray': 'Blue-ray only',
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

const functions = {}

export default { ...strings, ...functions }
