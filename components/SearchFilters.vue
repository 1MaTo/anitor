<script setup lang="ts">
const bdFilter = ref(true)
</script>

<template>
  <v-container class="d-flex pa-0 justify-end" fluid>
    <v-row no-gutters justify="end" style="height: 40px">
      <v-col class="flex-grow-0">
        <v-switch
          color="blue"
          class="d-inline-flex flex-grow-0 justify-end switch"
          hide-details
          v-model="bdFilter"
          label="Only Blue-ray"
        >
          <template #label="props">
            <div class="no-wrap">{{ props.label }}</div>
          </template>
        </v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.switch,
.switch :deep(.v-selection-control) {
  min-height: 0px;
}

.no-wrap {
  white-space: nowrap;
}
</style>
