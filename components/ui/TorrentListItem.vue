<script setup lang="ts">
import { si } from 'nyaapi'
const props = defineProps<{ data: si.Torrent }>()

const statusProps = computed(() => {
  switch (props.data.status) {
    case TorrentStatus.Danger:
      return {
        color: 'red',
        icon: 'fa-solid fa-arrow-rotate-left',
        textColor: 'text-red'
      }

    case TorrentStatus.Success:
      return { color: 'green', icon: 'fa-solid fa-user-check', textColor: 'text-green' }

    default:
      return { color: '', icon: '', textColor: 'text-blue-accent-1' }
  }
})

const publicDate = computed(() => new Date(props.data.date).toLocaleString())
</script>

<template>
  <v-list-item class="container py-4" href="" :ripple="false" border>
    <v-list-item-title :title="data.name" class="title" :class="statusProps.textColor">
      {{ data.name }}
    </v-list-item-title>

    <div class="meta-container">
      <v-chip size="small" class="meta-item default" label prepend-icon="fa-regular fa-calendar">
        {{ publicDate }}
      </v-chip>

      <v-chip
        size="small"
        class="meta-item default"
        label
        prepend-icon="fa-solid fa-file-arrow-down"
      >
        {{ data.filesize }}
      </v-chip>

      <v-chip size="small" class="meta-item default" label prepend-icon="mdi:mdi-translate-variant">
        {{ $t(`nyaa.sub-category.${data.sub_category}`) }}
      </v-chip>

      <v-chip
        v-if="data.status !== TorrentStatus.Default"
        size="small"
        label
        class="meta-item"
        :color="statusProps.color"
        :prepend-icon="statusProps.icon"
      >
        {{ $t(`nyaa.torrent-status.${data.status}`) }}
      </v-chip>
    </div>

    <template v-slot:append>
      <v-btn color="grey-lighten-1" icon="mdi:mdi-information" variant="text"></v-btn>
    </template>
  </v-list-item>
</template>

<style scoped>
.container {
  cursor: default;
}

.title {
  font-weight: 600;
}

.meta-container {
  margin-top: 8px;
  display: flex;
}

.meta-item.default {
  opacity: 0.7;
}

.meta-item:not(:last-child) {
  margin-right: 8px;
}

/* .meta-item {
  display: flex;
  line-height: 1.8em;
  align-items: center;
}
.meta-item > i {
  mar gin-right: 8px;
}*/
</style>
