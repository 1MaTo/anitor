<script setup lang="ts">
import { useTorrentStore } from '~/store/useTorrentStore'

const store = useTorrentStore()

const searchText = ref('')

const handleSetSearchText = (searchString: string) => {
  store.setSearchText(searchString)
}
</script>

<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col>
        <ui-search-field
          :placeholder="$t('search-torrents')"
          v-model="searchText"
          size="big"
          :loading="store.loadingTorrents"
          @submit="handleSetSearchText"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-slide-y-transition leave-absolute>
          <div v-if="store.errorMsg" class="text-caption mt-1 text-red-lighten-1">
            {{ `${$t('nyaa.request-failed')}: ${store.errorMsg}` }}
          </div>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </v-container>
</template>
