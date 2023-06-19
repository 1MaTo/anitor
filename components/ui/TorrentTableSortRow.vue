<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { SortOrder } from '~/types/sort'
import { useTorrentStore } from '~/store/useTorrentStore'

const props = withDefaults(
  defineProps<{
    maxFileSizeLength?: number
    maxLeechersLength?: number
    maxSeedersLength?: number
    maxCompletedLength?: number
  }>(),
  {
    maxFileSizeLength: 8,
    maxLeechersLength: 4,
    maxSeedersLength: 4,
    maxCompletedLength: 5
  }
)
const { name } = useDisplay()
const hideIcon = computed(() => {
  return ['xs', 'sm'].includes(name.value)
})
const iconWidth = computed(() => (hideIcon.value ? 18 : 0))
const letterWidth = ref(6.5)
const defaultEmptyTagLength = ref(38)
const getTagMaxWidth = (maxLength: number, iconWidth: number) => {
  return `${defaultEmptyTagLength.value - iconWidth + letterWidth.value * maxLength}px`
}
const fileSizeWidth = computed(() => getTagMaxWidth(props.maxFileSizeLength, iconWidth.value))
const seedersWidth = computed(() => getTagMaxWidth(props.maxSeedersLength, iconWidth.value))
const leechersWidth = computed(() => getTagMaxWidth(props.maxLeechersLength, iconWidth.value))
const completedWidth = computed(() => getTagMaxWidth(props.maxCompletedLength, iconWidth.value))

const fileSizeOrder = ref(SortOrder.None)
const dateOrder = ref(SortOrder.None)
const seedersOrder = ref(SortOrder.None)
const leechersOrder = ref(SortOrder.None)
const completedOrder = ref(SortOrder.None)

const store = useTorrentStore()
</script>

<template>
  <div class="pa-1 container">
    <div class="prop"></div>
    <div class="prop name"></div>
    <div
      :style="{ minWidth: fileSizeWidth, maxWidth: fileSizeWidth }"
      class="prop filesize default-tag"
    >
      <ui-sort-chip
        v-model="fileSizeOrder"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
        :text="$t('size')"
      />
    </div>
    <div class="prop default-tag" :style="{ minWidth: '150px', maxWidth: '150px' }">
      <ui-sort-chip
        v-model="dateOrder"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
        :text="$t('upload-date')"
      />
    </div>
    <div :style="{ minWidth: seedersWidth, maxWidth: seedersWidth }" class="prop user-count">
      <ui-sort-chip
        v-model="seedersOrder"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
      />
    </div>
    <div :style="{ minWidth: leechersWidth, maxWidth: leechersWidth }" class="prop user-count">
      <ui-sort-chip
        v-model="leechersOrder"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
      />
    </div>
    <div
      :style="{ minWidth: completedWidth, maxWidth: completedWidth }"
      class="prop downloads-complete-count default-tag"
    >
      <ui-sort-chip
        v-model="completedOrder"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.prop {
  opacity: 0.8;
  font-size: 0.8em;
  display: flex;
  align-items: center;
}

.prop + .prop {
  margin-left: 8px;
}

.name {
  flex: 1 1 100%;
}
</style>
