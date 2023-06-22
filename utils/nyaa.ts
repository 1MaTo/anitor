import { si } from 'nyaapi'
import { NyaaQuery, NyaaSortField } from '~/types/nyaa'

const NYAA_ENDPOINT = 'https://nyaa.si'
const BLU_RAY_QUERY = '((bd)|(blu-ray)|(blu ray))'

export const getNyaaTorrentLink = (id: string) => `${NYAA_ENDPOINT}/view/${id}`

const addBluRayQuery = (value: string) => `${value}${BLU_RAY_QUERY}`

export const modifyQuery = { addBluRayQuery }

export const DEFAULT_NYAA_SEARCH_TERMS = {
  term: ' ',
  n: 75,
  filter: 0,
  category: '1_0'
} as Partial<si.SearchOptions>

export const getNyaaTorrents = async (query?: Partial<NyaaQuery>) => {
  const queryString = query ? `?${new URLSearchParams(removeUndefinedFields(query) as any)}` : ''

  return (await $fetch(`/api/nyaa/search${queryString}`)) as si.Torrent[]
}

export const getTorrentColumnsMaxLength = (
  torrents: si.Torrent[]
): {
  filesize: number
  seeders: number
  leechers: number
  completed: number
} => {
  const fields = ['filesize', 'leechers', 'seeders', 'completed'] as (keyof si.Torrent)[]

  return torrents.reduce((sizes: any, torrent) => {
    fields.forEach((fieldName) => {
      sizes[fieldName] = Math.max(sizes[fieldName] || 0, torrent[fieldName].length)
    })

    return sizes
  }, {})
}

export const resolveSortFieldToNyaaSortField = (field?: keyof si.Torrent) => {
  switch (field) {
    case 'filesize':
      return NyaaSortField.Size

    case 'date':
      return NyaaSortField.Date

    case 'seeders':
      return NyaaSortField.Seeders

    case 'leechers':
      return NyaaSortField.Leechers

    case 'completed':
      return NyaaSortField.Downloads

    default:
      return undefined
  }
}
