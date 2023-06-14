const strings = {
  test: 'Русская локаль',
  'search-torrents': 'Поиск торрентов',
  nyaa: {
    'sub-category': {
      '1_1': 'AMV (Музыкальное видео)',
      '1_2': 'Английский',
      '1_3': 'Другой перевод',
      '1_4': 'Без перевода'
    },
    'torrent-status': {
      success: 'Проверенный',
      danger: 'Ремейк'
    }
  },
  leecher: 'Лич | Личи',
  seeder: 'Сид | Сиды',
  'upload-date': 'Дата публикации',
  'torrent-sub-category': 'Подкатегория торрента'
}

const functions = {}

export default { ...strings, ...functions }
