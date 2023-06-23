<script setup lang="ts">
import { mergeProps } from 'vue'

withDefaults(defineProps<{ label?: string; tooltip?: string; link?: string }>(), {
  label: '',
  tooltip: '',
  link: ''
})

const showTooltip = ref(false)
</script>

<template>
  <v-tooltip
    :text="tooltip"
    :model-value="showTooltip"
    :content-class="`py-1 px-2  tooltip-content ${$style['tooltip-content']} bg-grey-darken-3`"
    open-delay="300"
    location="top center"
    @update:model-value="(value) => (showTooltip = tooltip ? value : false)"
  >
    <template #activator="{ props: tooltipProps }">
      <v-hover v-slot="{ isHovering, props: hoverProps }">
        <nuxt-link external target="_blank" rel="noopener" :to="link">
          <v-chip
            size="small"
            v-bind="mergeProps($attrs, tooltipProps, hoverProps)"
            label
            :variant="link && isHovering ? 'tonal' : 'text'"
            class="container px-2 py-0"
            :class="{ tooltip, link }"
          >
            <span :class="{ 'chip-content': tooltip || link }">
              {{ label }}
            </span>
          </v-chip>
        </nuxt-link>
      </v-hover>
    </template>
  </v-tooltip>
</template>

<style scoped>
.container {
  opacity: 0.85;
}

.tooltip {
  cursor: help;
}

.link {
  cursor: pointer;
}

.container:not(:hover) .chip-content {
  border-bottom: 1px dashed;
}
</style>

<style module>
.tooltip-content {
  font-size: 0.75em !important;
}
</style>
