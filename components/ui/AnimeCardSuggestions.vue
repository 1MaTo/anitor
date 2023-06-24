<script setup lang="ts">
import { mergeProps } from 'vue'
import { useAnimeSuggestions } from '~/composables/useAnimeSuggestion'
const props = defineProps<{ name?: string }>()

const { suggestions, loading, error, refetch } = useAnimeSuggestions(props.name || '')

const currentIndex = ref(0)

const handleRemoveActiveElement = () => (document.activeElement as HTMLElement).blur()
</script>

<template>
  <v-hover>
    <template #default="{ isHovering, props: hoverProps }">
      <div v-bind="mergeProps($attrs, hoverProps)" @mouseleave="handleRemoveActiveElement">
        <v-sheet v-if="suggestions.length > 1" border class="paginator pb-2">
          <v-tooltip
            content-class="bg-warning"
            location="top"
            open-delay="300"
            :text="$t('anime-suggestions-tip')"
          >
            <template #activator="{ props: tooltipProps }">
              <ui-suggestions-paginator
                v-bind="tooltipProps"
                v-model="currentIndex"
                listen-arrows
                with-overflow
                :item-count="suggestions.length"
                :use-scroll="isHovering"
              />
            </template>
          </v-tooltip>
        </v-sheet>
        <v-card border class="card d-flex cursor-default pa-2" max-width="600">
          <v-fade-transition leave-absolute>
            <div v-if="loading || error" class="placeholder">
              <ui-anime-card-loader :retry="$t('try-again')" :error="error" @retry="refetch" />
            </div>
          </v-fade-transition>
          <v-fade-transition leave-absolute>
            <div v-if="!loading && suggestions.length && !error" v-bind="hoverProps">
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
  </v-hover>
</template>

<style scoped>
.placeholder {
  font-size: 0.75em;
  min-width: 300px;
  min-height: 100px;
}

.card {
  overflow: hidden;
  position: relative;
}

.paginator {
  position: absolute;
  top: -1.1em;
  right: 0px;
}
</style>
