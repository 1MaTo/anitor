<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { TorrentStatus } from '~/types/nyaa'
const { t } = useI18n()

const props = withDefaults(defineProps<{ status?: TorrentStatus | string }>(), {
  status: TorrentStatus.Default
})

const statusProps = computed(() => {
  switch (props.status) {
    case TorrentStatus.Danger:
      return {
        color: 'red',
        icon: 'fa-solid fa-arrow-rotate-left',
        textColor: 'text-red-darken-4',
        title: t('nyaa.remake')
      }

    case TorrentStatus.Success:
      return {
        color: 'green',
        icon: 'fa-solid fa-user-check',
        textColor: 'text-green',
        title: t('nyaa.trusted')
      }

    default:
      return { color: '', icon: '', textColor: 'text-blue-accent-1', title: '' }
  }
})
</script>

<template>
  <v-chip
    v-if="status !== TorrentStatus.Default"
    size="small"
    label
    :title="statusProps.title"
    :color="statusProps.color"
    :prepend-icon="statusProps.icon"
  >
    {{ $t(`nyaa.torrent-status.${status}`) }}
  </v-chip>
</template>
