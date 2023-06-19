<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fileSize?: string
    withIcon?: boolean
    torrentLink?: string
    magnetLink?: string
  }>(),
  {
    fileSize: '0',
    withIcon: true,
    torrentLink: '',
    magnetLink: ''
  }
)
const menu = ref(false)
const interactive = computed(() => Boolean(props.torrentLink || props.magnetLink))
</script>

<template>
  <v-menu
    v-model="menu"
    :open-on-click="interactive"
    :close-on-content-click="false"
    location="top start"
    origin="top start"
    transition="scale-transition"
  >
    <template #activator="{ props: menuProps }">
      <v-chip
        :class="{ 'no-select': interactive }"
        v-bind="{ ...menuProps, ...$attrs }"
        size="small"
        label
        :prepend-icon="withIcon ? 'mdi:mdi-download' : undefined"
        :title="$t('size')"
      >
        {{ fileSize }}
      </v-chip>
    </template>

    <v-card v-if="interactive">
      <v-btn-group density="comfortable" divided variant="outlined">
        <nuxt-link v-if="torrentLink" v-slot="nuxtLinkProps" custom :to="torrentLink">
          <v-hover v-slot="{ isHovering, props: hoverProps }">
            <v-btn
              :title="$t('nyaa.download-torrent')"
              v-bind="{ ...nuxtLinkProps, ...hoverProps }"
              size="small"
              density="compact"
              @click="menu = false"
            >
              <v-icon size="x-large" :color="isHovering ? 'primary' : 'grey'">
                mdi:mdi-file-download
              </v-icon>
            </v-btn>
          </v-hover>
        </nuxt-link>

        <nuxt-link v-if="magnetLink" v-slot="nuxtLinkProps" custom :to="magnetLink">
          <v-hover v-slot="{ isHovering, props: hoverProps }">
            <v-btn
              :title="$t('nyaa.download-magnet')"
              v-bind="{ ...nuxtLinkProps, ...hoverProps }"
              size="small"
              density="compact"
              @click="menu = false"
            >
              <v-icon size="x-large" :color="isHovering ? 'secondary' : 'grey'">
                mdi:mdi-magnet
              </v-icon>
            </v-btn>
          </v-hover>
        </nuxt-link>
      </v-btn-group>
    </v-card>
  </v-menu>
</template>
