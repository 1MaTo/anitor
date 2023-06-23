<script setup lang="ts">
const props = withDefaults(defineProps<{ description?: string; maxLength?: number }>(), {
  description: '',
  maxLength: 250
})

const clipped = computed(() => animeUtils.cutStringToLimit(props.description, props.maxLength))
</script>

<template>
  <v-menu location="top center" open-on-hover transition="slide-x-transition">
    <template #activator="{ props: menuProps }">
      <span class="text-medium-emphasis">
        {{ clipped }}
        <span
          v-if="clipped !== description"
          v-bind="menuProps"
          class="read-more-tip text-grey-darken-1"
        >
          ...{{ $t('read-more').toLowerCase() }}
        </span>
      </span>
    </template>
    <v-card
      v-if="clipped !== description"
      color="grey-darken-3"
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

.read-more-tip {
  cursor: help;
  font-size: 0.75em;
}

.read-more-tip:hover {
  text-decoration: underline;
}
</style>
