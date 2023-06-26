<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

const themeCookie = useCookie(CookieKey.theme, preferencesCookieOptions)
const localeCookie = useCookie(CookieKey.locale, preferencesCookieOptions)

const { locale } = useI18n()
const theme = useTheme()

onServerPrefetch(() => {
  if (themeCookie.value) {
    theme.global.name.value = themeCookie.value
  }

  if (localeCookie.value) {
    locale.value = localeCookie.value
  }
})

onBeforeMount(() => {
  if (!themeCookie.value) {
    themeCookie.value = getPreferedTheme()
  }

  if (!localeCookie.value) {
    localeCookie.value = getBrowserLocale()
  }

  theme.global.name.value = themeCookie.value
  locale.value = localeCookie.value
})
</script>

<template>
  <v-app>
    <app-bar />
    <v-main>
      <NuxtPage />
    </v-main>

    <app-footer />
  </v-app>
</template>

<style>
a {
  text-decoration: none;
  color: inherit;
}

.cursor-default {
  cursor: default;
}

.text-clip {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
