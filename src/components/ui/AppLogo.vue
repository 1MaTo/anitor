<script setup lang="ts">
import logoImage from '@/assets/bd_logo.png'
import { APP_NAME } from '@/utils/app'
</script>

<template>
  <div class="d-flex container">
    <v-img class="mr-3" width="60" aspect-ratio="1/1" :src="logoImage"></v-img>
    <div class="text-h5">{{ APP_NAME }}</div>
  </div>
</template>

<style scoped>
.container {
  cursor: default;
}
</style>
