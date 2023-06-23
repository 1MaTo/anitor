<script setup lang="ts">
import { useAnimeSuggestions } from '~/composables/useAnimeSuggestion'
const props = defineProps<{ name?: string }>()

const { suggestions, loading, error, refetch } = useAnimeSuggestions(props.name || '')

const currentIndex = ref(0)
</script>

<template>
  <div>
    <v-card v-if="suggestions.length > 1" class="paginator pa-1">
      <v-tooltip
        content-class="bg-warning"
        location="top"
        open-delay="300"
        :text="$t('anime-suggestions-tip')"
      >
        <template #activator="{ props: tooltipProps }">
          <ui-suggestions-paginator
            listen-arrows
            v-bind="tooltipProps"
            with-overflow
            v-model="currentIndex"
            :item-count="suggestions.length"
          />
        </template>
      </v-tooltip>
    </v-card>
    <v-card border class="card d-flex cursor-default pa-2" max-width="600">
      <v-fade-transition leave-absolute>
        <div class="placeholder" v-if="loading || error">
          <ui-anime-card-loader :retry="$t('try-again')" @retry="refetch" :error="error" />
        </div>
      </v-fade-transition>
      <v-fade-transition leave-absolute>
        <div v-if="!loading && suggestions && !error">
          <v-window v-model="currentIndex">
            <v-window-item v-for="item in suggestions" :key="item.id">
              <ui-anime-card v-bind="animeUtils.formatMALtoAnimeCardProps(item)" />
            </v-window-item>
          </v-window>
        </div>
      </v-fade-transition>
    </v-card>
  </div>
</template>

<style scoped>
.placeholder {
  width: 300px;
  height: 100px;
}

.card {
  overflow: hidden;
  position: relative;
}

.paginator {
  position: absolute;
  top: -1.5em;
  right: 0px;
}
</style>
