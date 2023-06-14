<script setup lang="ts">
withDefaults(defineProps<{ count?: number }>(), { count: 0 })
</script>

<template>
  <v-chip
    :title="$t('leecher', 2)"
    size="small"
    label
    prepend-icon="fa-solid fa-caret-down"
    color="red"
    >{{ count }}
  </v-chip>
</template>
