<script setup lang="ts">
import { reactive } from 'vue';


const state = reactive({ count: 0 })


const increment = () => state.count++
</script>

<template>
    <button @click="increment">{{ state.count }}</button>
</template>