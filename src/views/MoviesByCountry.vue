<script setup>
import { defineProps, onMounted, ref, computed } from 'vue'
import { useMovieStore } from '@/stores/movie'
import { useGenreStore } from '@/stores/genre'
import api from '@/plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const movieStore = useMovieStore()
const isLoading = ref(false)
const genreStore = useGenreStore()
const movies = ref([])
const props = defineProps({
  countryId: {
    type: String,
    required: true,
  },
})

// Paginação
const currentPage = ref(1)
const itemsPerPage = 20

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('movie')
  await movieStore.getMoviesByCountry(props.countryId.id)
  isLoading.value = false
})

const listMovies = async (genreId) => {
  genreStore.setCurrentGenreId(genreId)
  isLoading.value = true
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  })
  movies.value = response.data.results
  isLoading.value = false
}

// Padrão brasileiro de data
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

// Filmes da página atual
const displayedMovies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return movieStore.moviesByCountry.slice(start, end)
})

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } })
}
</script>

<template>
  <main>
    <div class="main">
    <button @click="$router.back()">Voltar</button>

    <h2>Filmes do país: {{ props.countryId }}</h2>

    <div class="movies-container">
      <div class="movie-card" v-for="movie in displayedMovies" :key="movie.id">
        <img
          v-if="movie.poster_path"
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          :alt="movie.title"
          @click="openMovie(movie.id)"
        />
        <div>
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.original_title }} ( {{ movie.original_language.toUpperCase() }} )</p>
          <p>{{ formatDate(movie.release_date) }}</p>
          <p class="movie-genres">
          <span
            v-for="genre_id in movie.genre_ids"
            :key="genre_id"
            @click="listMovies(genre_id)"
            :class="{ active: genre_id === genreStore.currentGenreId }"
          >
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
        </div>
        
      </div>
    </div>
  </div>
  </main>
</template>

<style scoped>
main {
  padding: 0 3vw 3w 3vw;
}
.movies-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  padding-bottom: 7vw;
}
.movie-card {
  width: 200px;
  display: flex;
  flex-direction: column;
  height: 28vw;
}
.movie-card div {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.movie-card h3,
.movie-card p {
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}
.movie-card img {
  width: 233px;
  height: 350px;
  object-fit: cover;
}
main {
  background-color: black;
  justify-content: center;  
} 
h1, h2, h3, p {
  padding-bottom: 0.5vw;
}
.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
  margin-top: auto;
}

.movie-genres span {
  background-color: #cc3574;
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}

.active {
  background-color: #67b086;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #abc322;
  color: #000;
  font-weight: bolder;
}
</style>