<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { MAL } from '~/types/my-anime-list'
import { animeUtils } from '~/utils/anime'
const props = defineProps<{ suggestions: MAL.AnimeSuggestion[] }>()

const currentIndex = ref(0)

const { locale, t } = useI18n()
const releaseDate = computed(() =>
  new Date(props.suggestions[currentIndex.value].start_date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
)

const durationInMinutes = computed(() =>
  props.suggestions[currentIndex.value].average_episode_duration
    ? Math.round(props.suggestions[currentIndex.value].average_episode_duration / 60)
    : 0
)

const formatString = computed(() => {
  const episodes = props.suggestions[currentIndex.value].num_episodes
  if (episodes === 0) return t('unknown')

  const episodesString = `${episodes} ${t('episode', episodes)}`
  const minutesString = `${durationInMinutes.value} ${t('minute', durationInMinutes.value)}`

  return `${episodesString} / ${minutesString}`
})
</script>

<template>
  <v-card border class="card" max-width="600">
    <div class="d-flex cursor-default pa-2">
      <div>
        <v-img width="200" :src="suggestions[currentIndex].main_picture.medium"></v-img>
      </div>
      <div class="pl-4 w-100 d-flex flex-column justify-space-between">
        <div>
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
          <div class="prop">
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
          <div class="prop">
            <span class="prefix text-disabled">
              {{ $t('format') }}
            </span>
            <ui-anime-card-prop-chip :label="formatString" />
          </div>
          <div class="prop">
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

          <div class="prop prop-list">
            <span class="prefix text-disabled">
              {{ $t('genre', suggestions[currentIndex].genres.length) }}
            </span>
            <div>
              <ui-anime-card-prop-chip
                v-for="genre in suggestions[currentIndex].genres"
                :key="genre.id"
                :link="mal.getGenreLink(genre.id)"
                :label="genre.name"
              />
            </div>
          </div>
        </div>
        <div class="prop prop-rating">
          <ui-anime-card-score
            :score="suggestions[currentIndex].mean"
            :score-count="suggestions[currentIndex].num_scoring_users"
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
}

.prop .prefix {
  margin-top: 0.2em;
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

.prop.prop-rating {
  margin-top: 15px;
  justify-content: end;
}
</style>
