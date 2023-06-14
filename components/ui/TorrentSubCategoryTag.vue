<script setup lang="ts">
withDefaults(defineProps<{ category?: string }>(), { category: '' })
</script>

<template>
  <v-chip
    label
    size="small"
    :title="$t('torrent-sub-category')"
    prepend-icon="mdi:mdi-translate-variant"
  >
    {{ $t(`nyaa.sub-category.${category}`) }}
  </v-chip>
</template>
