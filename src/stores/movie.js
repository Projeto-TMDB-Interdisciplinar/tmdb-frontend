import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    currentMovie: {},
    moviesByCountry: [],
  })

  const currentMovie = computed(() => state.currentMovie)

  const getMovieDetail = async (movieId) => {
    const response = await api.get(`movie/${movieId}`, {
      params: { language: 'pt-BR' },
    })
    state.currentMovie = response.data
  }

  const getMoviesByCountry = async (countryId) => {
    const response = await api.get('discover/movie', {
      params: {
        with_origin_country: countryId,
        language: 'pt-BR',
      },
    })

    state.moviesByCountry = response.data.results
  }

  const moviesByCountry = computed(() => state.moviesByCountry)

  return { currentMovie, moviesByCountry, getMovieDetail, getMoviesByCountry }
})
