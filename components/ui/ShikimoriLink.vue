<script setup lang="ts">
defineProps<{ link: string }>()
</script>
<template>
  <nuxt-link v-slot="nuxtLinkProps" custom external target="_blank" rel="noopener" :to="link">
    <v-btn
      v-bind="nuxtLinkProps"
      tag="div"
      density="comfortable"
      color="white"
      class="button no-select"
    >
      <template #prepend>
        <v-icon icon="$shikimori" class="icon" />
      </template>
      {{ $t('see-on-shikimori') }}
    </v-btn>
  </nuxt-link>
</template>

<style scoped>
.button {
  text-transform: unset;
  letter-spacing: unset;
}

.icon {
  margin-right: -5px;
  font-size: 1.3em;
}
</style>
