import { si } from 'nyaapi'
import { NyaaQuery } from '~/types/nyaa'

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
  const queryString = query ? `?${new URLSearchParams(query as any)}` : ''

  return (await $fetch(`/api/nyaa/search${queryString}`)) as si.Torrent[]
}
