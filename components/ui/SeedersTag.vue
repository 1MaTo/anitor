<script setup lang="ts">
withDefaults(defineProps<{ count?: number }>(), { count: 0 })
</script>

<template>
  <v-chip
    :title="$t('seeder', 2)"
    size="small"
    label
    prepend-icon="fa-solid fa-caret-up"
    color="green"
    >{{ count }}
  </v-chip>
</template>
