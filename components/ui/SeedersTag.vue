<script setup lang="ts">
withDefaults(defineProps<{ count?: number; withIcon?: boolean }>(), { count: 0, withIcon: true })
</script>

<template>
  <v-chip
    :title="$t('seeder', 2)"
    size="small"
    label
    :prepend-icon="withIcon ? 'mdi:mdi-account-arrow-up' : undefined"
    :color="count === 0 ? '' : 'green'"
    >{{ count }}
  </v-chip>
</template>
