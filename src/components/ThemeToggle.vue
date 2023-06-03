<script setup lang="ts">
import { ThemeType } from '@/types/theme'
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import ToggleThemeButtonVue from './ui/ToggleThemeButton.vue'
import { setDefaultTheme } from '@/utils/theme'

const theme = useTheme()
const currentTheme = computed(() =>
  theme.global.name.value === 'dark' ? ThemeType.dark : ThemeType.light
)

const handleOnThemeChange = (newTheme: ThemeType) => {
  setDefaultTheme(newTheme)
  theme.global.name.value = newTheme
}
</script>

<template>
  <toggle-theme-button-vue :theme="currentTheme" @theme-change="handleOnThemeChange" />
</template>
