<script setup lang="ts">
import { AppLocale, LanguageName } from '@/types/locale'

const props = defineProps<{
  locale: AppLocale
}>()
const emit = defineEmits<{ (e: 'locale-change', newLocale: AppLocale): void }>()

const handleOnClick = (newLocale: AppLocale) => {
  if (props.locale === newLocale) return
  emit('locale-change', newLocale)
}
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn data-testid="open-menu" v-bind="props" icon="mdi:mdi-translate"></v-btn>
    </template>
    <v-list density="compact" nav>
      <v-list-item
        color="primary"
        min-height="30"
        v-for="item in AppLocale"
        :key="item"
        :value="item"
        :active="locale === item"
        @click="() => handleOnClick(item)"
      >
        <v-list-item-title>{{ LanguageName[item] }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
