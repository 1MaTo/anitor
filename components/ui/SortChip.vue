<script setup lang="ts">
import { SortOrder } from '~/types/sort'

const props = withDefaults(
  defineProps<{ text?: string; modelValue: SortOrder; disabled?: boolean }>(),
  {
    text: '',
    modelValue: SortOrder.None
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: SortOrder): void
}>()

const order = ref(props.modelValue)

const icon = computed(() => {
  switch (order.value) {
    case SortOrder.None:
      return 'mdi:mdi-sort'

    case SortOrder.Asc:
      return 'mdi:mdi-sort-ascending'

    case SortOrder.Desc:
      return 'mdi:mdi-sort-descending'

    default:
      return ''
  }
})

const getNextSortState = (currentOrder: SortOrder) => {
  switch (currentOrder) {
    case SortOrder.None:
      return SortOrder.Asc

    case SortOrder.Asc:
      return SortOrder.Desc

    case SortOrder.Desc:
      return SortOrder.None
  }
}

const handleChangeOrder = () => {
  order.value = getNextSortState(order.value)
}

watch(order, () => emits('update:modelValue', order.value))

watch(
  () => props.modelValue,
  () => (props.modelValue === order.value ? null : (order.value = props.modelValue))
)

const active = computed(() => order.value !== SortOrder.None)
</script>

<template>
  <v-chip
    :disabled="disabled"
    link
    :title="$t('leecher', 2)"
    size="small"
    label
    :color="active ? 'primary' : undefined"
    :variant="active ? 'outlined' : 'text'"
    :prepend-icon="text ? icon : undefined"
    @click="handleChangeOrder"
    >{{ text ? text : '' }}
    <v-icon v-if="!text">{{ icon }}</v-icon>
  </v-chip>
</template>
