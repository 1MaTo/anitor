import { si } from 'nyaapi'

export const DEFAULT_NYAA_SEARCH_TERMS = {
  term: ' ',
  n: 75,
  filter: 0,
  category: '1_0'
} as Partial<si.SearchOptions>

export type NyaaQuery = {
  query?: string
  count?: number
}
