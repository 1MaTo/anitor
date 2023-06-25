<script setup lang="ts">
import { mergeProps } from 'vue'
const props = defineProps<{ searchName: string }>()

const copySearhName = () => {
  navigator.clipboard.writeText(props.searchName)
}
</script>

<template>
  <div class="d-flex">
    <v-menu open-on-hover :close-on-content-click="false" location="start top">
      <template v-slot:activator="{ props: menuProps }">
        <v-icon size="small" class="icon" v-bind="mergeProps(menuProps, $attrs)">
          mdi:mdi-cog
        </v-icon>
      </template>
      <v-card class="card text-medium-emphasis pa-2" max-width="600" border>
        <div>
          {{ $t('anime-suggestions-info.title') }}
        </div>
        <div class="mt-2">
          <div
            class="step"
            v-for="step in $t('anime-suggestions-info.steps').split('\n')"
            :key="step"
          >
            {{ step }}
          </div>
        </div>
        <div class="warning text-warning mt-2">
          {{ $t('anime-suggestions-info.warning') }}
        </div>
        <div class="subtitle mt-5">
          {{ $t('anime-suggestions-info.search-name-title') }}
        </div>
        <v-card class="mt-2 pa-1 d-flex align-center" rounded color="blue-darken-2" preve>
          <v-snackbar :timeout="1000" color="success" variant="tonal">
            <template v-slot:activator="{ props: snackbarProps }">
              <v-btn
                density="comfortable"
                v-bind="snackbarProps"
                @click="copySearhName"
                class="mr-2"
                icon="mdi:mdi-content-copy"
                variant="text"
              />
            </template>
            {{ $t('copied-to-clipboard') }}
          </v-snackbar>
          <span>{{ searchName }}</span>
        </v-card>
      </v-card>
    </v-menu>
  </div>
</template>

<style scoped>
.icon {
  cursor: help;
}

.card {
  cursor: default;
  font-size: 1em;
}

.step,
.warning,
.subtitle {
  font-size: 0.875em;
}

.step + .step {
  padding-top: 2px;
}

.warning {
  font-weight: 500;
}
</style>
