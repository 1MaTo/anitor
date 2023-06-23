<script setup lang="ts">
withDefaults(
  defineProps<{ size?: number; width?: number; color?: string; error?: string; retry?: string }>(),
  {
    size: 50,
    width: 4,
    error: '',
    retry: '',
    color: 'primary'
  }
)

defineEmits<{ (e: 'retry'): void }>()
</script>
<template>
  <div class="w-100 h-100 d-inline-flex justify-center align-center">
    <div v-if="error" class="d-flex justify-center flex-wrap">
      <div class="text-error text-center w-100 d-flex justify-center">{{ error }}</div>
      <v-btn size="small" color="error" v-if="retry" class="mt-2" @click="() => $emit('retry')">{{
        retry
      }}</v-btn>
    </div>
    <v-progress-circular
      v-if="!error"
      indeterminate
      :color="color"
      :size="size"
      :width="width"
    ></v-progress-circular>
  </div>
</template>

<style scoped></style>
