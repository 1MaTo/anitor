<script setup lang="ts">
import LocaleSelector from '@/components/LocaleSelector.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main>
    <theme-toggle />
    <locale-selector />
    <v-btn class="bg-orange-darken-1">{{ t('test') }}</v-btn>
  </main>
</template>
