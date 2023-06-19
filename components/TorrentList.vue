<script setup lang="ts">
import { useTorrentStore } from '~/store/useTorrentStore'

const store = useTorrentStore()

const sizes = computed(() => {
  return getTorrentColumnsMaxLength(store.torrents)
})
</script>

<template>
  <v-fade-transition leave-absolute>
    <ui-no-items-placeholder v-if="store.torrents.length === 0" :label="$t('no-items-found')" />
  </v-fade-transition>
  <ui-torrent-table-sort-row
    :max-file-size-length="sizes.filesize"
    :max-completed-length="sizes.completed"
    :max-leechers-length="sizes.leechers"
    :max-seeders-length="sizes.seeders"
  />
  <v-fade-transition v-if="store.torrents.length > 0" group>
    <ui-torrent-table-list-item
      v-for="item in store.torrents"
      :key="item.id"
      :max-file-size-length="sizes.filesize"
      :max-completed-length="sizes.completed"
      :max-leechers-length="sizes.leechers"
      :max-seeders-length="sizes.seeders"
      :data="item"
    />
  </v-fade-transition>
</template>
