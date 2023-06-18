import { si } from 'nyaapi'
import { NyaaQuery } from '~/server/utils'

export const useTorrentStore = defineStore('torrent', () => {
  const torrents = ref<si.Torrent[]>([])
  const loadingTorrents = ref(false)
  const errorMsg = ref('')

  const searchText = ref('')
  const blueRayFilter = ref(true)

  watch([searchText, blueRayFilter], async ([newText, newBlueRayFilter]) => {
    loadingTorrents.value = true
    try {
      const fetchedTorrents = await $fetch('/api/nyaa/search', {
        query: { query: searchText.value } as NyaaQuery
      })
      torrents.value = fetchedTorrents
    } catch (error: any) {
      errorMsg.value = error.message
      torrents.value = []
    } finally {
      loadingTorrents.value = false
    }
  })

  const setSearchText = (value: string) => {
    searchText.value = value
  }

  const setTorrentFilter = (value: boolean) => {
    blueRayFilter.value = value
  }

  return {
    torrents,

    blueRayFilter,
    searchText,

    loadingTorrents,
    errorMsg,

    setSearchText,
    setTorrentFilter
  }
})
