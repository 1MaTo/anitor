export enum NyaaSortField {
  Size = 'size',
  Date = 'id',
  Seeders = 'seeders',
  Leechers = 'leechers',
  Downloads = 'downloads'
}

export type NyaaQuery = {
  query?: string
  count?: number
  sortField?: NyaaSortField
  sortOrder?: 'asc' | 'desc'
}

export enum TorrentStatus {
  Success = 'success',
  Danger = 'danger',
  Default = 'default'
}

export enum TorrentSubCategory {
  AMV = '1_1',
  English = '1_2',
  NonEnglish = '1_3',
  Raw = '1_4'
}
