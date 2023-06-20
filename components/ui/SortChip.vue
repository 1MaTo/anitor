<script setup lang="ts">
import { SortOrder } from '~/types/sort'

const props = withDefaults(
  defineProps<{ text?: string; modelValue: SortOrder; disabled?: boolean; nonEmpty?: boolean }>(),
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
      return 'fa-solid fa-sort' /* 'mdi:mdi-sort' */

    case SortOrder.Asc:
      return 'fa fa-arrow-down-short-wide' /* 'mdi:mdi-sort-ascending' */

    case SortOrder.Desc:
      return 'fa fa-arrow-up-wide-short' /* 'mdi:mdi-sort-descending' */

    default:
      return ''
  }
})

const getNextSortState = (currentOrder: SortOrder) => {
  switch (currentOrder) {
    case SortOrder.None:
      return SortOrder.Desc

    case SortOrder.Asc:
      if (props.nonEmpty) return SortOrder.Desc
      return SortOrder.None

    case SortOrder.Desc:
      return SortOrder.Asc
  }
}

const handleChangeOrder = () => {
  order.value = getNextSortState(order.value)
}

watch(order, () =>
  order.value !== props.modelValue ? emits('update:modelValue', order.value) : null
)

watch(
  () => props.modelValue,
  () => (props.modelValue === order.value ? null : (order.value = props.modelValue))
)

const active = computed(() => order.value !== SortOrder.None)
</script>

<template>
  <v-chip
    :disabled="disabled"
    :title="$t('leecher', 2)"
    :color="active ? 'primary' : undefined"
    :variant="active ? 'outlined' : 'text'"
    :prepend-icon="text ? icon : undefined"
    :class="$style.chip"
    link
    size="small"
    label
    @click="handleChangeOrder"
    >{{ text ? text : '' }}
    <v-icon v-if="!text">{{ icon }}</v-icon>
  </v-chip>
</template>

<style module>
.chip i {
  font-size: 1em;
}
</style>
