<script setup lang="ts">
import { TorrentSubCategory } from '~/types/nyaa'

const props = withDefaults(defineProps<{ category?: TorrentSubCategory; withText?: boolean }>(), {
  category: undefined,
  withText: false
})

const color = computed(() => {
  switch (props.category) {
    case TorrentSubCategory.AMV:
      return 'red'

    case TorrentSubCategory.English:
      return 'green'

    case TorrentSubCategory.NonEnglish:
      return 'amber'

    case TorrentSubCategory.Raw:
      return 'grey'

    default:
      return ''
  }
})

const icon = computed(() => {
  switch (props.category) {
    case TorrentSubCategory.AMV:
      return 'fa-brands fa-youtube'

    case TorrentSubCategory.English:
      return 'mdi:mdi-translate-variant'

    case TorrentSubCategory.NonEnglish:
      return 'mdi:mdi-web'

    case TorrentSubCategory.Raw:
      return 'mdi:mdi-ideogram-cjk-variant'

    default:
      return 'mdi:mdi-translate'
  }
})
</script>

<template>
  <v-chip
    v-if="category"
    :color="color"
    label
    size="small"
    :title="$t(`nyaa.sub-category.${category}`)"
    :prepend-icon="withText ? icon : ''"
  >
    <v-icon v-if="!withText">{{ icon }}</v-icon>
    {{ withText ? $t(`nyaa.sub-category.${category}`) : '' }}
  </v-chip>
</template>
