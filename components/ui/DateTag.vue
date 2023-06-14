<script setup lang="ts">
withDefaults(defineProps<{ date?: Date }>(), { date: () => new Date() })
</script>

<template>
  <v-chip
    :title="$t('upload-date')"
    class=""
    size="small"
    label
    prepend-icon="fa-regular fa-calendar"
  >
    {{ date.toLocaleString() }}
  </v-chip>
</template>
