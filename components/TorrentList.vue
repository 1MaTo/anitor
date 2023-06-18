<script setup lang="ts">
import TorrentListItem from './ui/TorrentListItem.vue'
import { useTorrentStore } from '~/store/useTorrentStore'

const store = useTorrentStore()
</script>

<template>
  <v-list class="py-0">
    <v-fade-transition leave-absolute>
      <ui-no-items-placeholder v-if="store.torrents.length === 0" :label="$t('no-items-found')" />
    </v-fade-transition>
    <v-fade-transition group leave-absolute>
      <torrent-list-item
        v-for="item in store.torrents"
        v-if="store.torrents.length > 0"
        :key="item.id"
        :data="item"
      />
    </v-fade-transition>
  </v-list>
</template>
