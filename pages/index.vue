<script setup lang="ts"></script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <torrent-search />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0">
          <search-filters />
        </v-col>
      </v-row>
      <v-row class="py-4">
        <v-col>
          <torrent-list />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
