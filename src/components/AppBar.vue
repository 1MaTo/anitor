<script setup lang="ts">
import SettingBar from './SettingBar.vue'
import AppLogo from './ui/AppLogo.vue'
</script>

<template>
  <v-app-bar>
    <v-row justify="space-between" align="center">
      <v-col cols="auto" class="mx-4">
        <app-logo />
      </v-col>
      <v-col cols="auto" class="mx-4">
        <setting-bar />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped></style>
