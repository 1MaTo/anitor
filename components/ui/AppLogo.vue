<script setup lang="ts">
import { APP_NAME } from '@/utils/app'
</script>

<template>
  <div class="d-flex container">
    <div class="text-h5">
      <span class="text text-primary">
        {{ APP_NAME.substring(0, 1) }}
      </span>
      <span class="text">
        {{ APP_NAME.substring(1) }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.container {
  cursor: default;
}

.text {
  letter-spacing: 0.1em;
  font-weight: 600;
}
</style>
