<script setup lang="ts">
import { VNodeRef } from 'nuxt/dist/app/compat/capi'

const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholer: { type: String, default: 'Search' },
  disabled: Boolean,
  loading: Boolean,
  rounded: Boolean,
  highlightOnFocus: Boolean,
  size: { type: String, default: 'default' }
})
defineEmits<{
  (e: 'update:modelValue', payload: Event): void
  (e: 'submit'): void
}>()

const focused = ref(false)
const input = ref<VNodeRef | null>(null)

const handleFocusOnField = (payload: KeyboardEvent) => {
  if (focused.value) return
  if (payload.key !== '/') return
  payload.preventDefault()
  input.value.focus()
}

onMounted(() => {
  document.body.addEventListener('keydown', handleFocusOnField)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('keydown', handleFocusOnField)
})
</script>

<template>
  <div>
    <v-sheet
      class="container"
      :class="{
        disabled: props.disabled,
        default: !props.size || props.size === 'default',
        big: props.size === 'big',
        rounded,
        highlight: focused && props.highlightOnFocus
      }"
      border
      :rounded="rounded ? 'pill' : 'rounded'"
    >
      <v-container fluid class="pa-0 h-100">
        <v-row no-gutters align="center" class="input-row">
          <v-col cols="auto" align="center" class="icon-col">
            <v-btn
              data-testid="search-button"
              :disabled="props.disabled"
              elevation="0"
              class="search-button"
              :class="{ rounded: rounded }"
              icon="mdi:mdi-magnify"
              @click="$emit('submit')"
            ></v-btn>
          </v-col>

          <v-col cols="auto" class="divider-col">
            <v-divider vertical></v-divider>
          </v-col>

          <v-col>
            <v-row no-gutters>
              <v-col class="input-col">
                <input
                  ref="input"
                  class="input"
                  type="text"
                  :disabled="props.disabled"
                  :value="modelValue"
                  :placeholder="props.placeholer"
                  @focusin="focused = true"
                  @focusout="focused = false"
                  @keydown.enter="$emit('submit')"
                  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col class="loading-col">
                <v-fade-transition>
                  <v-progress-linear
                    v-if="loading"
                    transition="fade-transition"
                    color="primary"
                    height="4"
                    indeterminate
                  ></v-progress-linear>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="auto" align="center" class="hotkey-col">
            <v-fade-transition>
              <v-sheet v-if="!focused" class="hotkey-container" border rounded="">
                <div class="hotkey">/</div>
              </v-sheet>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped>
.container {
  overflow: hidden;
  transition: box-shadow 0.1s ease;
}

.container.highlight {
  box-shadow: 0px 0px 50px rgb(var(--v-theme-secondary));
}

.container.default {
  font-size: 1rem;
  height: 45px;
}

.container.big {
  font-size: 2rem;
  height: 68px;
}

.container.disabled {
  opacity: 0.5;
}

.loading-col {
  height: 4px;
}

.divider-col {
  padding-left: 1px !important;
  width: 1px;
  height: 100%;
}

.input-row {
  height: 100%;
}

.input-col {
  line-height: 1.45em;
  padding: 8px 12px !important;
}

.big .input-col {
  padding: 8px 24px !important;
}

.input {
  width: 100%;
  font-size: 1em;
  outline: none;
}

.icon-col {
  height: 100%;
  display: flex;
  align-items: center;
}

.search-button {
  width: 2.5em;
  font-size: inherit;
  cursor: pointer;
  height: 100%;
  border-radius: 0;
}

.search-button :deep(.v-icon) {
  opacity: 0.5;
}

.search-button.rounded {
  padding-left: 4px;
  border-top-left-radius: 9999px !important;
  border-bottom-left-radius: 9999px !important;
}

.hotkey-col {
  position: relative;
  pointer-events: none;
}

.hotkey-container {
  position: absolute;
  left: -2.1em;
  top: calc(50% - 0.8em);
  font-size: 1em;
  margin-right: 12px;
}

.rounded .hotkey-container {
  left: -3em;
}

.big .hotkey-container {
  font-size: 0.7em;
}

.hotkey {
  opacity: 0.7;
  width: 1.5em;
}
</style>
