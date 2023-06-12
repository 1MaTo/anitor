<script setup lang="ts">
import SearchField from '~/components/ui/SearchField.vue'
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <torrent-list />
          <!--  <search-field
            v-model="inputValue"
            :placeholder="$t('search-torrents')"
            :loading="loading"
            highlight-on-focus
            size="big"
            @submit="console.log('submit')"
          /> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
