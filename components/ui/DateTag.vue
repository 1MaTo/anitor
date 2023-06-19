<script setup lang="ts">
withDefaults(defineProps<{ date?: Date; withIcon?: boolean }>(), {
  date: () => new Date(),
  withIcon: true
})
</script>

<template>
  <v-chip
    :title="$t('upload-date')"
    size="small"
    label
    :prepend-icon="withIcon ? 'mdi:mdi-calendar-clock-outline' : undefined"
  >
    {{ date.toLocaleString('ru') }}
  </v-chip>
</template>
