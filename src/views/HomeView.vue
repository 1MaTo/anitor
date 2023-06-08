<script setup lang="ts">
import {} from '@/mocks/nyaa-rss'

const handleFetchNyaaRss = async () => {
  const response = await fetch('https://nyaa.si/?page=rss')
  const text = await response.text()
  console.log(text)
  console.log(new window.DOMParser().parseFromString(text, 'text/xml'))
}
</script>

<template>
  <v-btn color="success" @click="handleFetchNyaaRss">Test</v-btn>
</template>
