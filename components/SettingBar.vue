<script setup lang="ts">
import LocaleSelector from '@/components/LocaleSelector.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <div class="container">
    <div class="item">
      <locale-selector />
    </div>
    <div class="item">
      <theme-toggle />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.item:not(:first-child) {
  margin-left: 8px;
}
</style>
