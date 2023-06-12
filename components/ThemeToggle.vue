<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import ToggleThemeButtonVue from './ui/ToggleThemeButton.vue'
import { ThemeType } from '@/types/theme'

const themeCookie = useCookie(CookieKey.theme, preferencesCookieOptions)
const theme = useTheme()
const currentTheme = computed(() =>
  theme.global.name.value === 'dark' ? ThemeType.dark : ThemeType.light
)

const handleOnThemeChange = (newTheme: ThemeType) => {
  themeCookie.value = newTheme
  theme.global.name.value = newTheme
}
</script>

<template>
  <toggle-theme-button-vue :theme="currentTheme" @theme-change="handleOnThemeChange" />
</template>
