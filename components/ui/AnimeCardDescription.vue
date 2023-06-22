<script setup lang="ts">
const props = withDefaults(defineProps<{ description?: string; maxLength?: number }>(), {
  description: '',
  maxLength: 300
})

const clipped = computed(() => animeUtils.cutStringToLimit(props.description, props.maxLength))
</script>

<template>
  <v-menu location="top center" open-on-hover transition="slide-x-transition">
    <template v-slot:activator="{ props }">
      <span v-bind="props">{{ clipped }}</span>
    </template>
    <v-card
      v-if="clipped !== description"
      color="grey-darken-1"
      max-width="500"
      class="full-description pa-3"
    >
      <div class="full-description-paragraph" v-for="text in description.split(/\n/g)">
        {{ text }}
      </div>
    </v-card>
  </v-menu>
</template>

<style scoped>
.full-description {
  font-size: 0.875em;
}

.full-description-paragraph + .full-description-paragraph {
  margin-top: 8px;
}
</style>
