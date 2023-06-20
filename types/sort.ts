import { si } from 'nyaapi'

export enum SortOrder {
  Desc = 'desc',
  Asc = 'asc',
  None = 'none'
}

export type SortOptions = {
  field: keyof si.Torrent
  order: SortOrder
}
