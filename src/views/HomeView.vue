<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <main>
    <theme-toggle />
    <v-btn class="bg-orange-darken-1">{{ $t('test') }}</v-btn>
  </main>
</template>
