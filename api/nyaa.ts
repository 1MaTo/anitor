import { si } from 'nyaapi'
import { NyaaQuery } from '~/types/nyaa'

export const getNyaaTorrents = async (query?: Partial<NyaaQuery>) => {
  const queryString = query ? `?${new URLSearchParams(query as any)}` : ''

  return (await $fetch(`/api/nyaa/search${queryString}}`)) as si.Torrent[]
}
