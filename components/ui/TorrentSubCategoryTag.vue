<script setup lang="ts">
import { TorrentSubCategory } from '~/types/nyaa'

withDefaults(defineProps<{ category?: TorrentSubCategory }>(), { category: undefined })
</script>

<template>
  <v-chip
    v-if="category"
    label
    size="small"
    :title="$t('torrent-sub-category')"
    prepend-icon="mdi:mdi-translate-variant"
  >
    {{ $t(`nyaa.sub-category.${category}`) }}
  </v-chip>
</template>
