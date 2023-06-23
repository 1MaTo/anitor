const strings = {
  test: 'Русская локаль',
  'search-torrents': 'Поиск торрентов',
  leecher: 'Лич | Личи | Личи | Личи',
  seeder: 'Сид | Сиды | Сиды | Сиды',
  'upload-date': 'Дата публикации',
  'torrent-sub-category': 'Подкатегория торрента',
  size: 'Размер',
  'no-items-found': 'Ничего не найдено',
  'only-blu-ray': 'BD',
  type: 'Тип',
  status: 'Статус',
  studio: 'Студия | Студии | Студии | Студий',
  genre: 'Жанр | Жанра | Жанра | Жанров',
  format: 'Формат',
  episode: 'Серия" | Серии | Серии | Серий',
  minute: 'Минута | Минуты | Минуты | Минут',
  unknown: 'Неопределен',
  'anime-suggestions-tip':
    'Данные результаты могут быть неправильными\nБерутся первые 3 результата поиска из myanimelist.net',
  'no-anime-found': 'Аниме не найдено',
  'try-again': 'Повторить попытку',
  'read-more': 'Подробнее',
  'anime-rating': 'Рейтинг',
  'anime-score-count': 'Оценок | Оценка | Оценки | Оценок',
  'anime-media-type': {
    unknown: 'Неопределен',
    tv: 'ТВ Сериал',
    ova: 'OVA',
    movie: 'Фильм',
    special: 'Спешал',
    ona: 'ONA',
    music: 'Музыка'
  },
  'anime-status': {
    finished_airing: 'Вышло',
    currently_airing: 'Онгоинг',
    not_yet_aired: 'Анонс'
  },
  nyaa: {
    'request-failed': 'Ошибка запроса к Nyaa.si',
    'download-torrent': 'Скачать .torrent',
    'download-magnet': 'Magnet ссылка',
    'all-downloads': 'Всего скачиваний',
    trusted: 'Торренты загруженные проверенными людьми',
    remake:
      'Реенкод оригинального релиза; Ремукс оригинального релиза другого пользователя для хардсабов и/или фиксов; Перезалив оригинального релиза используя не оригинальные названия файлов; Перезалив оригинального релиза с недостающими и/или не связанными дополнительными файлами',
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
  }
}

const functions = {
  'anime-age-rating': {
    g: ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? 'Нет возрастных ограничений' : 'G',
    pg: ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? 'Рекомендуется присутствие родителей' : 'PG',
    pg_13: ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? 'Детям до 13 лет просмотр нежелателен' : 'PG-13',
    r: ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? 'Лицам до 17 лет обязательно присутствие взрослого' : 'R',
    'r+': ({ named }: { named: (str: string) => boolean }) =>
      named('long') ? 'Лицам до 17 лет просмотр запрещен' : 'R+',
    rx: ({ named }: { named: (str: string) => boolean }) => (named('long') ? 'Хентай ' : 'Rx')
  } as any
}

export default { ...strings, ...functions }
