<script setup>
import { defineProps, onMounted, ref, computed } from 'vue'
import { useMovieStore } from '@/stores/movie'

const movieStore = useMovieStore()

const props = defineProps({
  countryId: {
    type: String,
    required: true,
  },
})

// Paginação
const currentPage = ref(1)
const itemsPerPage = 20

// Busca os filmes assim que entra na página
onMounted(async () => {
  await movieStore.getMoviesByCountry(props.countryId)
})

// Filmes da página atual
const displayedMovies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return movieStore.moviesByCountry.slice(start, end)
})
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
        />
        <h3>{{ movie.title }}</h3>
      </div>
    </div>
  </div>
  </main>
</template>

<style scoped>
.movies-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.movie-card img {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 0.5rem;
}
main {
  background-color: black;
  justify-content: center;  
} 
h1, h2, h3 {
  color: rgb(255, 255, 255);
}
</style>