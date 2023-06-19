<script setup lang="ts">
withDefaults(defineProps<{ count?: number; withIcon?: boolean }>(), { count: 0, withIcon: true })
</script>

<template>
  <v-chip
    :title="$t('nyaa.all-downloads')"
    size="small"
    label
    :prepend-icon="withIcon ? 'mdi:mdi-account-check' : undefined"
  >
    {{ count }}
  </v-chip>
</template>
