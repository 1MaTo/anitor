import { si } from 'nyaapi'

export const useTorrentStore = defineStore('torrent', () => {
  const torrents = ref<si.Torrent[]>([])

  const setTorrents = (newTorrents: si.Torrent[]) => {
    torrents.value = newTorrents
  }

  return { torrents, setTorrents }
})
