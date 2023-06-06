<script setup lang="ts">
import SettingBar from './SettingBar.vue'
import Logo from './ui/Logo.vue'
</script>

<template>
  <v-app-bar>
    <v-row justify="space-between" align="center">
      <v-col cols="auto" class="mx-4">
        <logo />
      </v-col>
      <v-col cols="auto" class="mx-4">
        <setting-bar />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped></style>
