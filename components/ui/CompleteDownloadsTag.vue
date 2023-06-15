<script setup lang="ts">
withDefaults(defineProps<{ count?: number }>(), { count: 0 })
</script>

<template>
  <v-chip :title="$t('nyaa.all-downloads')" size="small" label prepend-icon="fa-solid fa-download">
    {{ count }}
  </v-chip>
</template>
