<script setup lang="ts">
import { useTorrentStore } from '~/store/useTorrentStore'

const store = useTorrentStore()

const show = ref(false)

onMounted(() => {
  store.initializeDefaultTorrents()
  setTimeout(() => (show.value = true), 300)
})
</script>

<template>
  <div>
    <v-fade-transition>
      <v-container v-show="show">
        <v-row>
          <v-col>
            <torrent-search />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0">
            <search-filters />
          </v-col>
        </v-row>
        <v-row class="py-4">
          <v-col>
            <torrent-list />
          </v-col>
        </v-row>
      </v-container>
    </v-fade-transition>
  </div>
</template>
