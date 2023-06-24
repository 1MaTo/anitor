<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: number
    itemCount?: number
    withOverflow?: boolean
    listenArrows?: boolean
    useScroll?: boolean
  }>(),
  {
    modelValue: 0,
    itemCount: 0,
    withOverflow: false,
    listenArrows: false,
    useScroll: false
  }
)

const emits = defineEmits<{ (e: 'update:modelValue', payload: number): void }>()

const handleNext = () => {
  if (props.modelValue === props.itemCount - 1) {
    props.withOverflow && emits('update:modelValue', 0)
    return
  }

  emits('update:modelValue', props.modelValue + 1)
}

const handlePrev = () => {
  if (props.modelValue === 0) {
    props.withOverflow && emits('update:modelValue', props.itemCount - 1)
    return
  }

  emits('update:modelValue', props.modelValue - 1)
}

const disabledButtons = computed(() => props.itemCount - 1 === 0)
const variant = computed(() => (disabledButtons ? 'text' : 'flat'))

const onKeyDown = (event: KeyboardEvent) => {
  if (event.code === 'ArrowLeft') return handlePrev()
  if (event.code === 'ArrowRight') return handleNext()
}

const onScroll = (event: WheelEvent) => {
  if (!props.useScroll) return
  event.preventDefault()
  event.deltaY > 0 ? handleNext() : handlePrev()
}

const onIntersect = (isIntersecting: boolean) => {
  if (isIntersecting) {
    document.addEventListener('wheel', onScroll, { passive: false } as any)
  } else {
    document.removeEventListener('wheel', onScroll, { passive: false } as any)
  }

  if (!props.listenArrows) return

  if (isIntersecting) {
    document.body.addEventListener('keydown', onKeyDown)
  } else {
    document.body.removeEventListener('keydown', onKeyDown)
  }
}
</script>

<template>
  <div v-intersect="onIntersect" class="d-flex align-center">
    <v-btn
      tag="div"
      color="grey"
      :disabled="disabledButtons"
      class="button pa-0"
      size="small"
      :variant="(variant as any)"
      @click="handlePrev"
    >
      <v-icon size="small">fa-solid fa-caret-left</v-icon>
    </v-btn>
    <span class="text no-select px-2 text-medium-emphasis">{{
      `${modelValue + 1} / ${itemCount}`
    }}</span>
    <v-btn
      tag="div"
      color="grey"
      :disabled="disabledButtons"
      class="button pa-0"
      size="small"
      :variant="(variant as any)"
      @click="handleNext"
    >
      <v-icon size="small">fa-solid fa-caret-right</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.button {
  min-width: unset;
  width: 1.5em;
  height: 1.5em;
}

.text {
  font-size: 0.75em;
}
</style>
