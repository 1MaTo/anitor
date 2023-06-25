<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { AnimeCardProps } from '~/types/anime'
import { animeUtils } from '~/utils/anime'

const props = defineProps<AnimeCardProps>()

const { locale, t } = useI18n()
const releaseDate = computed(() =>
  props.startDate.toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
)

const formatString = computed(() => {
  if (props.episodes === 0) return t('unknown')
  const episodesString = `${props.episodes} ${t('episode', props.episodes)}`
  const minutesString = `${props.episodeDuration} ${t('minute', props.episodeDuration)}`
  return `${episodesString} / ${minutesString}`
})
</script>

<template>
  <div class="d-flex">
    <div class="h-100">
      <v-img eager transition="fade-transition" width="200" min-height="200" :src="image">
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height w-100 h-100">
            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>
    </div>
    <div class="pl-4 w-100 d-flex flex-column justify-space-between">
      <div>
        <div class="prop prop-title text-primary">
          <nuxt-link external target="_blank" rel="noopener" :to="mal.getSourceLink(id)">
            {{ title }}
          </nuxt-link>
        </div>

        <div class="prop">
          <ui-anime-card-description :description="description" />
        </div>
        <div class="prop">
          <span class="prefix text-disabled">{{ $t('type') }}</span>
          <ui-anime-card-prop-chip
            :link="mal.getMediaTypeLink(mediaType)"
            :label="$t(animeUtils.getMediaTypeLocaleKey(mediaType))"
          />
          <ui-anime-card-prop-chip
            :link="mal.getSeasonLink(startSeason)"
            :tooltip="releaseDate"
            :label="startSeason.year.toString()"
          />
          <ui-anime-card-prop-chip
            :tooltip="$t(animeUtils.getRatingLocaleKey(ageRating), { long: true })"
            :label="$t(animeUtils.getRatingLocaleKey(ageRating))"
          />
          <ui-anime-card-status-chip :status="airingStatus" />
        </div>
        <div class="prop">
          <span class="prefix text-disabled">
            {{ $t('format') }}
          </span>
          <ui-anime-card-prop-chip :label="formatString" />
        </div>
        <div class="prop">
          <span class="prefix text-disabled">
            {{ $t('studio', studios.length) }}
          </span>
          <ui-anime-card-prop-chip
            v-for="studio in studios"
            :key="studio.id"
            :link="mal.getStudioLink(studio.id)"
            :label="studio.name"
          />
        </div>

        <div class="prop prop-list">
          <span class="prefix text-disabled">
            {{ $t('genre', genres.length) }}
          </span>
          <div>
            <ui-anime-card-prop-chip
              v-for="genre in genres"
              :key="genre.id"
              :link="mal.getGenreLink(genre.id)"
              :label="genre.name"
            />
          </div>
        </div>

        <div class="mt-4">
          <ui-shikimori-link :link="shikimori.getAnimeLink(id)" />
        </div>
      </div>
      <div class="prop prop-score justify-end">
        <ui-anime-card-score :score="score" :score-count="scoreCount" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.prop-score {
  margin-top: 1em;
}
</style>
