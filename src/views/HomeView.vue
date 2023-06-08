<script setup lang="ts">
import axios from 'axios'

const handleFetchNyaaRss = async () => {
  const response = await axios('https://nyaa.ink/', { withCredentials: true })
  const text = response.data
  console.log(text)
  console.log(new window.DOMParser().parseFromString(text, 'text/xml'))
}
</script>

<template>
  <v-btn color="success" @click="handleFetchNyaaRss">Test</v-btn>
</template>
