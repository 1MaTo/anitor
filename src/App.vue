<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
</script>

<template>
  <v-app>
    <app-bar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>
