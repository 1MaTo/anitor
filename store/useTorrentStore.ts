import { si } from 'nyaapi'
import { NyaaQuery } from '~/types/nyaa'

export const useTorrentStore = defineStore('torrent', () => {
  const torrents = ref<si.Torrent[]>([])
  const loadingTorrents = ref(false)
  const errorMsg = ref('')

  const searchText = ref('')
  const bluRayFilter = ref(true)

  watch([searchText, bluRayFilter], async ([newText, newBluRayFilter]) => {
    await fetchTorrents(newText, { bluRay: newBluRayFilter })
  })

  const fetchTorrents = async (query: string, filters?: { bluRay?: boolean }) => {
    loadingTorrents.value = true
    let textQuery = query

    if (filters?.bluRay) {
      textQuery = modifyQuery.addBluRayQuery(textQuery)
    }

    try {
      const fetchedTorrents = await $fetch('/api/nyaa/search', {
        query: { query: textQuery } as NyaaQuery
      })
      torrents.value = fetchedTorrents
    } catch (error: any) {
      errorMsg.value = error.message
      torrents.value = []
    } finally {
      loadingTorrents.value = false
    }
  }

  const setSearchText = (value: string) => {
    searchText.value = value
  }

  const setBluRayFilter = (value: boolean) => {
    bluRayFilter.value = value
  }

  const initializeDefaultTorrents = async () => {
    await fetchTorrents(searchText.value, { bluRay: bluRayFilter.value })
  }

  return {
    torrents,

    bluRayFilter,
    searchText,

    loadingTorrents,
    errorMsg,

    setSearchText,
    setBluRayFilter,

    initializeDefaultTorrents
  }
})
