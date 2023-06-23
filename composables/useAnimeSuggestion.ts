import { MAL } from '~/types/my-anime-list'
import { cleanNyaaAnimeName } from '~/utils/anime'
import { useI18n } from 'vue-i18n'

export const useAnimeSuggestions = (name: string) => {
  const { t } = useI18n()
  const loading = ref(false)
  const suggestions = ref<MAL.AnimeSuggestion[]>([])
  const error = ref('')

  const refetch = () => {
    findSuggestions(name)
  }

  const findSuggestions = async (animeName: string) => {
    loading.value = true
    error.value = ''
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
            'num_scoring_users',
            'num_episodes',
            'average_episode_duration'
          ]
        } as Partial<MAL.SearchQuery>
      })
      suggestions.value = result
      if (suggestions.value.length === 0) error.value = `${t('no-anime-found')} - [${cleanName}]`
    } catch (error: any) {
      error.value = error.message
    }

    loading.value = false
  }

  watch(
    () => name,
    (newName) => {
      if (!newName) return
      findSuggestions(newName)
    }
  )

  onMounted(() => {
    if (!name) return
    findSuggestions(name)
  })

  return { suggestions, loading, error, refetch }
}
