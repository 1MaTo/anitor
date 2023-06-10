<script setup lang="ts">
  const handleGetApi = async () => {
    const result = await $fetch("/api/nyaa/search");
    console.log(result);
  };
</script>

<template>
  <div>
    {{ $t("test") }}
    <v-btn @click="handleGetApi">get api</v-btn>
  </div>
</template>
