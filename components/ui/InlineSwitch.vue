<script setup lang="ts">
defineProps<{
  readonly?: boolean
  loading?: string | boolean
  modelValue?: string | boolean
  label: string
}>()

defineEmits<{
  (e: 'update:modelValue', payload: string | boolean): void
}>()
</script>

<template>
  <v-switch
    :readonly="readonly"
    :loading="loading"
    :model-value="modelValue"
    :label="label"
    color="primary"
    class="d-inline-flex flex-grow-0 justify-end switch"
    hide-details
    @update:model-value="(event) => $emit('update:modelValue', event)"
  >
    <template #label="props">
      <div class="no-wrap">{{ props.label }}</div>
    </template>
  </v-switch>
</template>

<style scoped>
.switch,
.switch :deep(.v-selection-control) {
  min-height: 0px;
}

.no-wrap {
  white-space: nowrap;
}
</style>
