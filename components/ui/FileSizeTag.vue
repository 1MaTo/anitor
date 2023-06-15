<script setup lang="ts">
withDefaults(defineProps<{ fileSize?: string }>(), {
  fileSize: '0'
})
</script>

<template>
  <v-chip size="small" label prepend-icon="fa-solid fa-file-arrow-down" :title="$t('size')">
    {{ fileSize }}</v-chip
  >
</template>
