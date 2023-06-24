<script setup lang="ts">
const props = defineProps<{ score?: number; scoreCount?: number }>()

const ratingColor = computed(() => {
  if (!props.score) return 'text-grey'
  if (props.score >= 7) return 'text-green'
  if (props.score >= 6) return 'text-orange'
  if (props.score >= 0) return 'text-red-accent-3'
})
</script>

<template>
  <div>
    <span class="prefix text-disabled">
      {{ $t('anime-rating').toLowerCase() }}
    </span>
    <span class="rating" :class="ratingColor">{{ score || 'N/A' }}</span>
    <div v-if="scoreCount" class="user-count text-disabled">
      {{
        new Intl.NumberFormat('ru', { useGrouping: true }).format(scoreCount) +
        ' ' +
        $t('anime-score-count', scoreCount).toLowerCase()
      }}
    </div>
  </div>
</template>

<style scoped>
.prefix {
  line-height: 0.75em;
  margin-right: 0.5em;
}

.rating {
  font-size: 2em;
  line-height: 0.75em;
  font-weight: 500;
}

.user-count {
  width: 100%;
  text-align: right;
  line-height: 0.8em;
  font-size: 0.8em;
  margin-top: 0.2em;
}
</style>
