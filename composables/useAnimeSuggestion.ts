import { cleanNyaaAnimeName } from '~/utils/anime'

export const useAnimeSuggestions = (name: string) => {
  const loading = ref(false)
  const suggestions = ref<any[]>([])

  const findSuggestions = async (animeName: string) => {
    loading.value = true
    const cleanName = cleanNyaaAnimeName(animeName) || animeName
    const result = await $fetch('/api/mal/search')
    suggestions.value = result
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
