<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SelectLocaleButton from './ui/SelectLocaleButton.vue'
import { AppLocale } from '@/types/locale'

const localeCookie = useCookie(CookieKey.locale, preferencesCookieOptions)
const { locale } = useI18n()

const handleOnLocaleChange = (newLocale: AppLocale) => {
  localeCookie.value = newLocale
  locale.value = newLocale
}
</script>

<template>
  <select-locale-button :locale="locale" @locale-change="handleOnLocaleChange" />
</template>
