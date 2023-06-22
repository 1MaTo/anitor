<script setup lang="ts">
const props = withDefaults(defineProps<{ description?: string; maxLength?: number }>(), {
  description: '',
  maxLength: 300
})

const clipped = computed(() => animeUtils.cutStringToLimit(props.description, props.maxLength))
</script>

<template>
  <v-menu location="top center" open-on-hover transition="slide-x-transition">
    <template #activator="{ props: menuProps }">
      <span v-bind="menuProps">{{ clipped }}</span>
    </template>
    <v-card
      v-if="clipped !== description"
      color="grey-darken-1"
      max-width="500"
      class="full-description pa-3"
    >
      <div
        v-for="(text, index) in description.split(/\n/g)"
        :key="index"
        class="full-description-paragraph"
      >
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
