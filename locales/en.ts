const strings = {
  test: 'English locale',
  'search-torrents': 'Search torrents',
  nyaa: {
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
  },
  leecher: 'Leacher | Leachers',
  seeder: 'Seeder | Seeders',
  'upload-date': 'Upload date',
  'torrent-sub-category': 'Torrent subcategory'
}

const functions = {}

export default { ...strings, ...functions }
