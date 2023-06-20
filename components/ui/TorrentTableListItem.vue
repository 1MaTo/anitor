<script setup lang="ts">
import { si } from 'nyaapi'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { TorrentStatus } from '~/types/nyaa'
const props = withDefaults(
  defineProps<{
    data: si.Torrent
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

const publicDate = computed(() => new Date(props.data.date))

const { name } = useDisplay()

const hideIcon = computed(() => {
  return ['xs', 'sm'].includes(name.value)
})

const statusColorClass = computed(() => {
  switch (props.data.status) {
    case TorrentStatus.Danger:
      return 'text-green'

    case TorrentStatus.Success:
      return 'text-error'

    default:
      return ''
  }
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
</script>

<template>
  <v-sheet class="pa-1 container">
    <div class="row-indicator bg-primary" />
    <div class="row-indicator after bg-primary" />
    <div class="prop">
      <ui-torrent-sub-category-tag :category="(data.sub_category as any)" />
    </div>
    <div class="prop name text-clip" :title="data.name">
      <v-hover v-slot="{ isHovering, props: hoverProps }">
        <nuxt-link
          v-bind="hoverProps"
          :class="{
            'text-medium-emphasis': !isHovering && !statusColorClass,
            'name-hovered': isHovering,
            'text-primary': isHovering,
            [statusColorClass]: !isHovering
          }"
          class="text-clip"
          external
          target="_blank"
          rel="noopener"
          :to="getNyaaTorrentLink(data.id)"
        >
          {{ data.name }}
        </nuxt-link>
      </v-hover>
    </div>
    <div :style="{ width: fileSizeWidth }" class="prop filesize default-tag">
      <ui-file-size-tag
        :torrent-link="data.torrent"
        :magnet-link="data.magnet"
        :with-icon="!hideIcon"
        class="w-100"
        :file-size="data.filesize"
      />
    </div>
    <div class="prop default-tag" :style="{ width: '150px' }">
      <ui-date-tag :with-icon="!hideIcon" class="w-100" :date="publicDate" />
    </div>
    <div :style="{ width: seedersWidth }" class="prop user-count">
      <ui-seeders-tag
        :with-icon="!hideIcon"
        class="w-100"
        :class="{ 'disabled-tag': Number(data.seeders) === 0 }"
        :count="Number(data.seeders)"
      />
    </div>
    <div :style="{ width: leechersWidth }" class="prop user-count">
      <ui-leechers-tag
        :with-icon="!hideIcon"
        class="w-100"
        :class="{ 'disabled-tag': Number(data.leechers) === 0 }"
        :count="Number(data.leechers)"
      />
    </div>
    <div :style="{ width: completedWidth }" class="prop downloads-complete-count default-tag">
      <ui-complete-downloads-tag
        :with-icon="!hideIcon"
        class="w-100"
        :class="{ 'disabled-tag': Number(data.completed) === 0 }"
        :count="Number(data.completed)"
      />
    </div>
  </v-sheet>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
}

.container:hover .row-indicator {
  transform: scaleX(1);
}

.row-indicator {
  --row-indicator-width: 2px;
  position: absolute;
  top: calc(50% - 35%);
  height: 70%;
  width: var(--row-indicator-width);
  left: calc(var(--row-indicator-width) * -1);
  transform: scaleX(0);
  transition: transform 0.1s ease;
  transform-origin: center right;
}

.row-indicator.after {
  width: var(--row-indicator-width);
  left: unset;
  right: calc(var(--row-indicator-width) * -1);
  transform-origin: center left;
}

.prop {
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

.name-hovered {
  cursor: pointer;
  text-decoration: underline;
}

.filesize,
.user-count,
.downloads-complete-count {
  flex-grow: 0;
  flex-shrink: 0;
}

.default-tag {
  opacity: 0.7;
}

.disabled-tag {
  opacity: 0.4;
}
</style>