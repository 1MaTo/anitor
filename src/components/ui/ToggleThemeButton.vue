<script setup lang="ts">
import { ThemeType } from '@/types/theme'
const props = defineProps<{
  theme: ThemeType
}>()
const emit = defineEmits<{ (e: 'theme-change', newTheme: ThemeType): void }>()

const handleOnClick = () => {
  emit('theme-change', props.theme === ThemeType.dark ? ThemeType.light : ThemeType.dark)
}
</script>

<template>
  <v-btn size="small" data-testid="change-theme" icon="true" @click="handleOnClick">
    <v-scale-transition>
      <v-icon v-if="theme === 'dark'"> mdi:mdi-weather-night </v-icon>
      <v-icon v-if="theme === 'light'"> fa-solid fa-sun </v-icon>
    </v-scale-transition>
  </v-btn>
</template>
