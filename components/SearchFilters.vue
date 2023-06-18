<script setup lang="ts">
import { useTorrentStore } from '~/store/useTorrentStore'

const store = useTorrentStore()

const handleUpdateBluRayFilter = (value: boolean): any => {
  store.setBluRayFilter(value)
}

const loading = computed(() =>
  store.loadingTorrents ? (store.bluRayFilter ? 'white' : 'orange-darken-1') : false
)
</script>

<template>
  <v-container class="d-flex pa-0 justify-end" fluid>
    <v-row no-gutters justify="end" style="height: 40px">
      <v-col class="flex-grow-0">
        <ui-inline-switch
          :label="$t('only-blu-ray')"
          :readonly="store.loadingTorrents"
          :loading="loading"
          :model-value="store.bluRayFilter"
          @update:model-value="(event) => handleUpdateBluRayFilter(event as any)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
