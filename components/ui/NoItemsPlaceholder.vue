<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: 'No items found' })
</script>

<template>
  <v-sheet border class="pa-10 d-flex justify-center cursor-default">
    <div class="text-h6 font-weight-regular text-grey">
      {{ label }}
    </div>
  </v-sheet>
</template>
