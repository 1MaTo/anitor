<script setup lang="ts">
import { mergeProps } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'
import { ThemeType } from '~/types/theme'

withDefaults(defineProps<{ label?: string; tooltip?: string; link?: string }>(), {
  label: '',
  tooltip: '',
  link: ''
})

const theme = useTheme()

const tooltipBgColor = computed(() =>
  theme.global.name.value === ThemeType.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-3'
)

const showTooltip = ref(false)
</script>

<template>
  <v-tooltip
    :text="tooltip"
    :model-value="showTooltip"
    :content-class="`py-1 px-2 text-medium-emphasis tooltip-content ${$style['tooltip-content']} ${tooltipBgColor}`"
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
            <span class="chip-content">
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
