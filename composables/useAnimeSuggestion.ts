import { MAL } from '~/types/my-anime-list'
import { cleanNyaaAnimeName } from '~/utils/anime'

export const useAnimeSuggestions = (name: string) => {
  const loading = ref(false)
  const suggestions = ref<MAL.AnimeSuggestion[]>([])

  const findSuggestions = async (animeName: string) => {
    loading.value = true
    const cleanName = cleanNyaaAnimeName(animeName) || animeName
    try {
      const result = await $fetch<MAL.AnimeSuggestion[]>('/api/mal/search', {
        query: {
          query: cleanName,
          limit: ITEM_LIMITS.MAL_SEARCH_LIMIT,
          fields: [
            'id',
            'main_picture',
            'title',
            'alternative_titles',
            'synopsis',
            'media_type',
            'start_date',
            'start_season',
            'status',
            'studios',

            'genres',
            'mean',
            'rating',
            'end_date'
          ]
        } as Partial<MAL.SearchQuery>
      })
      suggestions.value = result
    } catch (error: any) {
      console.error(error.message)
    }

    loading.value = false
  }

  watch(
    () => name,
    (newName) => {
      findSuggestions(newName)
    }
  )

  onMounted(() => findSuggestions(name))

  return { suggestions, loading }
}
