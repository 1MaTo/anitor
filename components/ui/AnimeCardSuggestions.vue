<script setup lang="ts">
import { MAL } from '~/types/my-anime-list'
import { animeUtils } from '~/utils/anime'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ suggestions: MAL.AnimeSuggestion[] }>()

const currentIndex = ref(0)

const { locale } = useI18n()
const releaseDate = computed(() =>
  new Date(props.suggestions[currentIndex.value].start_date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
)
</script>

<template>
  <v-card border class="card" max-width="700">
    <div class="d-flex cursor-default">
      <div>
        <v-img width="225" :src="suggestions[currentIndex].main_picture.medium"></v-img>
      </div>
      <div class="py-2 px-4 w-100">
        <div class="prop prop-title text-primary">
          <nuxt-link
            external
            target="_blank"
            rel="noopener"
            :to="mal.getSourceLink(suggestions[currentIndex].id)"
          >
            {{ suggestions[currentIndex].title }}
          </nuxt-link>
        </div>
        <div class="prop">
          <ui-anime-card-description :description="suggestions[currentIndex].synopsis" />
        </div>
        <div class="prop secondary">
          <span class="prefix text-disabled">{{ $t('type') }}</span>
          <ui-anime-card-prop-chip
            :link="mal.getMediaTypeLink(suggestions[currentIndex].media_type)"
            :label="$t(animeUtils.getMediaTypeLocaleKey(suggestions[currentIndex].media_type))"
          />
          <ui-anime-card-prop-chip
            :link="mal.getSeasonLink(suggestions[currentIndex].start_season)"
            :tooltip="releaseDate"
            :label="suggestions[currentIndex].start_season.year.toString()"
          />
          <ui-anime-card-prop-chip
            :tooltip="
              $t(animeUtils.getRatingLocaleKey(suggestions[currentIndex].rating), { long: true })
            "
            :label="$t(animeUtils.getRatingLocaleKey(suggestions[currentIndex].rating))"
          />
          <ui-anime-card-status-chip :status="suggestions[currentIndex].status" />
        </div>
        <div class="prop secondary">
          <span class="prefix text-disabled">
            {{ $t('studio', suggestions[currentIndex].studios.length) }}
          </span>
          <ui-anime-card-prop-chip
            v-for="studio in suggestions[currentIndex].studios"
            :key="studio.id"
            :link="mal.getStudioLink(studio.id)"
            :label="studio.name"
          />
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card {
  overflow: hidden;
}

.prop + .prop {
  margin-top: 4px;
}

.prop {
  font-size: 0.875em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.prefix {
  margin-right: 8px;
}

.prop-title {
  font-size: 1em;
  display: inline;
  cursor: pointer;
}

.prop-title:hover {
  text-decoration: underline;
}
</style>
