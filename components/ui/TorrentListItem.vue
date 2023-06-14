<script setup lang="ts">
import { si } from 'nyaapi'
import SeedersTag from './SeedersTag.vue'
import { TorrentStatus } from '~/types/nyaa'
const props = defineProps<{ data: si.Torrent }>()

const statusProps = computed(() => {
  switch (props.data.status) {
    case TorrentStatus.Danger:
      return {
        color: 'red',
        icon: 'fa-solid fa-arrow-rotate-left',
        textColor: 'text-red-darken-4'
      }

    case TorrentStatus.Success:
      return { color: 'green', icon: 'fa-solid fa-user-check', textColor: 'text-green' }

    default:
      return { color: '', icon: '', textColor: 'text-blue-accent-1' }
  }
})

const publicDate = computed(() => new Date(props.data.date))
</script>

<template>
  <v-list-item class="container py-6" href="" :ripple="false" border>
    <div class="mb-2">
      <ui-date-tag class="meta-item default" :date="publicDate" />
      <ui-torrent-sub-category-tag class="meta-item default" :category="data.sub_category" />

      <v-chip
        v-if="data.status !== TorrentStatus.Default"
        size="small"
        label
        class="meta-item"
        :color="statusProps.color"
        :prepend-icon="statusProps.icon"
      >
        {{ $t(`nyaa.torrent-status.${data.status}`) }}
      </v-chip>
    </div>

    <v-list-item-title :title="data.name" class="title" :class="statusProps.textColor">
      <NuxtLink external target="_blank" rel="noopener" :to="getNyaaTorrentLink(data.id)">
        {{ data.name }}
      </NuxtLink>
    </v-list-item-title>

    <div class="meta-container mt-2">
      <v-chip
        size="small"
        class="meta-item default"
        label
        prepend-icon="fa-solid fa-file-arrow-down"
      >
        {{ data.filesize }}
      </v-chip>

      <seeders-tag class="meta-item" :count="Number(data.seeders)" />

      <ui-leechers-tag class="meta-item" :count="Number(data.leechers)" />
    </div>

    <template #append>
      <v-btn color="grey-lighten-1" icon="mdi:mdi-information" variant="text"></v-btn>
    </template>
  </v-list-item>
</template>

<style scoped>
.container {
  cursor: default;
}

.title {
  width: fit-content;
  cursor: pointer;
  font-weight: 600;
}

.title:hover {
  text-decoration: underline;
}

.meta-container {
  display: flex;
}

.meta-item.default {
  opacity: 0.7;
}

.meta-item:not(:last-child) {
  margin-right: 8px;
}
</style>
