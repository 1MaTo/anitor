<script setup lang="ts">
import { si } from 'nyaapi'
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
  <v-list-item class="container py-3" href="" :ripple="false" border>
    <v-list-item-title :title="data.name" class="title" :class="statusProps.textColor">
      <nuxt-link external target="_blank" rel="noopener" :to="getNyaaTorrentLink(data.id)">
        {{ data.name }}
      </nuxt-link>
    </v-list-item-title>

    <div class="meta-container mt-2">
      <ui-date-tag class="meta-item default" :date="publicDate" />
      <ui-torrent-sub-category-tag class="meta-item default" :category="data.sub_category" />
      <ui-file-size-tag class="meta-item default" :file-size="data.filesize" />
      <ui-complete-downloads-tag class="meta-item default" :count="Number(data.completed)" />
      <ui-seeders-tag class="meta-item" :count="Number(data.seeders)" />
      <ui-leechers-tag class="meta-item" :count="Number(data.leechers)" />
      <ui-torrent-status-tag class="meta-item" :status="data.status" />
    </div>

    <template #append>
      <nuxt-link external target="_blank" rel="noopener" :to="data.torrent">
        <v-btn
          :title="$t('nyaa.download-torrent')"
          size="small"
          color="grey-lighten-1"
          icon="fa-solid fa-file-arrow-down"
          variant="text"
        ></v-btn>
      </nuxt-link>
      <nuxt-link :to="data.magnet">
        <v-btn
          :title="$t('nyaa.download-magnet')"
          size="small"
          class="ml-2"
          color="grey-lighten-1"
          icon="fa-solid fa-magnet"
          variant="text"
        ></v-btn>
      </nuxt-link>
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
