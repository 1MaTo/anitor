<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { si } from 'nyaapi'
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

const store = useTorrentStore()

const fileSizeField = computed(() =>
  store.sort.field === 'filesize' ? store.sort.order : SortOrder.None
)
const dateField = computed(() => (store.sort.field === 'date' ? store.sort.order : SortOrder.None))
const seedersField = computed(() =>
  store.sort.field === 'seeders' ? store.sort.order : SortOrder.None
)
const leechersField = computed(() =>
  store.sort.field === 'leechers' ? store.sort.order : SortOrder.None
)
const completedField = computed(() =>
  store.sort.field === 'completed' ? store.sort.order : SortOrder.None
)

const handleUpdateSort = (field: keyof si.Torrent, order: SortOrder) => {
  store.setSort({ field, order })
}

watch(store, () => {})
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
        non-empty
        :model-value="fileSizeField"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
        :text="$t('size')"
        @update:model-value="(sortOrder) => handleUpdateSort('filesize', sortOrder)"
      />
    </div>
    <div class="prop default-tag" :style="{ minWidth: '150px', maxWidth: '150px' }">
      <ui-sort-chip
        non-empty
        :model-value="dateField"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
        :text="$t('upload-date')"
        @update:model-value="(sortOrder) => handleUpdateSort('date', sortOrder)"
      />
    </div>
    <div :style="{ minWidth: seedersWidth, maxWidth: seedersWidth }" class="prop user-count">
      <ui-sort-chip
        non-empty
        :model-value="seedersField"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
        @update:model-value="(sortOrder) => handleUpdateSort('seeders', sortOrder)"
      />
    </div>
    <div :style="{ minWidth: leechersWidth, maxWidth: leechersWidth }" class="prop user-count">
      <ui-sort-chip
        non-empty
        :model-value="leechersField"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
        @update:model-value="(sortOrder) => handleUpdateSort('leechers', sortOrder)"
      />
    </div>
    <div
      :style="{ minWidth: completedWidth, maxWidth: completedWidth }"
      class="prop downloads-complete-count default-tag"
    >
      <ui-sort-chip
        non-empty
        :model-value="completedField"
        :disabled="store.loadingTorrents"
        class="w-100 no-select"
        @update:model-value="(sortOrder) => handleUpdateSort('completed', sortOrder)"
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
