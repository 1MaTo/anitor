import { si } from 'nyaapi'
import { SortOptions, SortOrder } from '~/types/sort'
import { getNyaaTorrents } from '~/utils/nyaa'

export const useTorrentStore = defineStore('torrent', () => {
  const torrents = ref<si.Torrent[]>([])
  const loadingTorrents = ref(false)
  const errorMsg = ref('')

  const sort = reactive<SortOptions>({ field: 'date', order: SortOrder.Desc })

  const searchText = ref('')
  const bluRayFilter = ref(true)

  watch([searchText, bluRayFilter, sort], async ([newText, newBluRayFilter, newSort]) => {
    await fetchTorrents(newText, { bluRay: newBluRayFilter, sort: newSort })
  })

  const fetchTorrents = async (
    query: string,
    filters?: { bluRay?: boolean; sort?: SortOptions }
  ) => {
    loadingTorrents.value = true
    let textQuery = query

    if (filters?.bluRay) {
      textQuery = modifyQuery.addBluRayQuery(textQuery)
    }

    try {
      const fetchedTorrents = await getNyaaTorrents({
        query: textQuery,
        sortField: resolveSortFieldToNyaaSortField(filters?.sort?.field),
        sortOrder: filters?.sort?.order === SortOrder.None ? undefined : filters?.sort?.order,
        count: ITEM_LIMITS.TORRENTS
      })
      torrents.value = fetchedTorrents
      errorMsg.value = ''
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

  const setSort = (value: Partial<SortOptions>) => {
    Object.assign(sort, { ...sort, ...value })
  }

  const initializeDefaultTorrents = async () => {
    await fetchTorrents(searchText.value, { bluRay: bluRayFilter.value, sort })
  }

  return {
    torrents,

    bluRayFilter,
    searchText,

    sort,
    loadingTorrents,
    errorMsg,

    setSort,
    setSearchText,
    setBluRayFilter,

    initializeDefaultTorrents
  }
})
