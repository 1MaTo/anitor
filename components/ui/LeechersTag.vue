<script setup lang="ts">
withDefaults(defineProps<{ count?: number; withIcon?: boolean }>(), { count: 0, withIcon: true })
</script>

<template>
  <v-chip
    :title="$t('leecher', 2)"
    size="small"
    label
    :prepend-icon="withIcon ? 'mdi:mdi-account-arrow-down' : undefined"
    :color="count === 0 ? '' : 'red'"
    >{{ count }}
  </v-chip>
</template>
