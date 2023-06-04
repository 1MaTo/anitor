<script setup lang="ts">
import { AppLocale } from '@/types/locale'
import { useI18n } from 'vue-i18n'
import SelectLocaleButton from './ui/SelectLocaleButton.vue'
import { setDefaultLocale } from '@/utils/locale'

const { locale } = useI18n()

const handleOnLocaleChange = (newLocale: AppLocale) => {
  setDefaultLocale(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <select-locale-button @locale-change="handleOnLocaleChange" :locale="locale" />
</template>
