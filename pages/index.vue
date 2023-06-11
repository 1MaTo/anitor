<script setup lang="ts">
import SearchField from '~/components/ui/SearchField.vue'

const inputValue = ref()
const loading = ref(false)
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <client-only>
            <search-field
              v-model="inputValue"
              :placeholder="$t('search-torrents')"
              :loading="loading"
              highlight-on-focus
              size="big"
              @submit="console.log('submit')"
            />
          </client-only>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
