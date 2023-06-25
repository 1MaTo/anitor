<script setup lang="ts">
import { MAL } from '~/types/my-anime-list'
import { animeUtils } from '~/utils/anime'

const props = defineProps<{ status: MAL.AiringStatus }>()

const color = computed(() => {
  switch (props.status) {
    case MAL.AiringStatus.Finished:
      return 'green'

    case MAL.AiringStatus.Ongoing:
      return 'blue'

    case MAL.AiringStatus.Planned:
      return 'red'

    default:
      return undefined
  }
})
</script>

<template>
  <v-chip size="small" label class="px-2 py-1 chip" :color="color">
    {{ $t(animeUtils.getStatusLocaleKey(status)) }}
  </v-chip>
</template>

<style scoped>
.chip {
  font-weight: 600 !important;
}
</style>
