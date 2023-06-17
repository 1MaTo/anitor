<script setup lang="ts">
import { NyaaQuery } from '~/server/utils'
import { useTorrentStore } from '~/store/useTorrentStore'

const store = useTorrentStore()

const loading = ref(false)
const errorMessage = ref('')
const searchText = ref('')

const handleFetchTorrents = async (searchString: string) => {
  loading.value = true
  try {
    const fetchedTorrents = await $fetch('/api/nyaa/search', {
      query: { query: searchString } as NyaaQuery
    })
    store.setTorrents(fetchedTorrents)
  } catch (error: any) {
    errorMessage.value = error.message
    store.setTorrents([])
  }
  searchText.value = searchText.value
  loading.value = false
}
</script>

<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col>
        <ui-search-field
          size="big"
          v-model="searchText"
          :loading="loading"
          @submit="handleFetchTorrents"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-slide-y-transition leave-absolute>
          <div v-if="errorMessage" class="text-caption mt-1 text-red-lighten-1">
            {{ `${$t('nyaa.request-failed')}: ${errorMessage}` }}
          </div>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </v-container>
</template>
