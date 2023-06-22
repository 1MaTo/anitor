export namespace MAL {
  export enum NsfwType {
    White = 'white',
    Gray = 'gray',
    Black = 'black'
  }

  export type Genre = {
    id: number
    name: string
  }

  export type AltTitles = {
    synonyms: string[]
    en: string
    ja: string
  }

  export enum MediaType {
    'Unknown' = 'unknown',
    'Tv' = 'tv',
    'Ova' = 'ova',
    'Movie' = 'movie',
    'Special' = 'special',
    'Ona' = 'ona',
    'Music' = 'music'
  }

  export enum AiringStatus {
    Finished = 'finished_airing',
    Ongoing = 'currently_airing',
    Planned = 'not_yet_aired'
  }

  export type Picture = { large?: string; medium?: string }

  export enum SeasonType {
    Winter = 'winter',
    Spring = 'spring',
    Summer = 'summer',
    Fall = 'fall'
  }

  export type Season = {
    year: 2023
    season: SeasonType
  }

  export enum WeekDay {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday'
  }

  export type Broadcast = {
    day_of_the_week: WeekDay | 'other'
    /** For example - '01:24' */
    start_time: string
  }

  export enum Rating {
    /** All Ages */
    G = 'g',
    /** Children */
    Pg = 'pg',
    /** Teens 13 and Older */
    Pg13 = 'pg_13',
    /** 17+ (violence & profanity) */
    R = 'r',
    /** Profanity & Mild Nudity */
    RPlus = 'r+',
    /** Hentai */
    Rx = 'rx'
  }

  export enum Source {
    Other = 'other',
    Original = 'original',
    Manga = 'manga',
    ForKomaManga = '4_koma_manga',
    WebManga = 'web_manga',
    DigitalManga = 'digital_manga',
    Novel = 'novel',
    LightNovel = 'light_novel',
    VisualNovel = 'visual_novel',
    Game = 'game',
    CardGame = 'card_game',
    Book = 'book',
    PictureBook = 'picture_book',
    Radio = 'radio',
    Music = 'music'
  }

  export type Studio = {
    id: number
    name: string
  }

  export type Anime = {
    id: number
    title: string
    main_picture: Picture
    alternative_titles: AltTitles
    /** Format - yyyy-mm-dd */
    start_date: string
    /** Format - yyyy-mm-dd */
    end_date: string
    synopsis: string
    mean: number
    rank: number
    popularity?: number
    num_scoring_users?: number
    nsfw: NsfwType
    genres: Genre[]
    /** example - 2022-06-09T13:01:38+00:00 */
    created_at: string
    /** example - 2022-06-09T13:01:38+00:00 */
    updated_at: string
    media_type: MediaType
    status: AiringStatus
    num_episodes: number
    start_season: Season
    broadcast: Broadcast
    source: Source
    /** Average length of episode in seconds. */
    average_episode_duration: number
    rating: Rating
    studios: Studio[]
  }

  export type SearchQuery = {
    query: string
    fields: (keyof Omit<Anime, 'id' | 'title' | 'main_picture'>)[]
    limit: number
  }

  export type AnimeListResponse = {
    data: { node: Partial<Anime> }[]
    paging: {
      next?: string
      previous?: string
    }
  }

  export type AnimeSuggestion = Pick<
    Anime,
    | 'id'
    | 'main_picture'
    | 'title'
    | 'alternative_titles'
    | 'synopsis'
    | 'media_type'
    | 'start_date'
    | 'start_season'
    | 'status'
    | 'studios'
    | 'genres'
    | 'mean'
    | 'rating'
    | 'end_date'
  >
}
