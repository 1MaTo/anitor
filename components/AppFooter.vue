<script setup lang="ts">
import { APP_GITHUB } from '~/utils/app'

const yearString = `${new Date().getFullYear()} — Anitor`
</script>

<template>
  <v-footer class="footer text-medium-emphasis">
    <nuxt-link external target="_blank" rel="noopener" :to="APP_GITHUB">
      <v-btn density="compact" variant="text" class="mr-2" icon="mdi:mdi-github"></v-btn>
      <span>
        {{ yearString }}
      </span>
    </nuxt-link>
  </v-footer>
</template>

<style scoped>
.footer {
  font-size: 0.875em;
  cursor: default;
  max-height: 42px;
}
</style>
