<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useMovieStore } from '@/stores/movie';
  const movieStore = useMovieStore();

  const props = defineProps({
    movieId: {
      type: Number,
      required: true,
    },
  });

  const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

  onMounted(async () => {
    await movieStore.getMovieDetail(props.movieId);
  });
</script>

<template>
  <main>
    <button @click="$router.back()"><span class="fa-solid fa-arrow-left"></span></button>
  <div class="main">
    <div class="content">
      <img class="poster"
        :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
        :alt="movieStore.currentMovie.title"
      />
      <div class="details">
        <h1>Filme: {{ movieStore.currentMovie?.title }}</h1>
        <p>
          {{ movieStore.currentMovie?.original_title }}
          ( {{ movieStore.currentMovie?.original_language?.toUpperCase() }} )
        </p>

        <p>{{ formatDate(movieStore.currentMovie?.release_date) }}</p>

        <p>{{ movieStore.currentMovie?.tagline }}</p>
        <p>{{ movieStore.currentMovie?.overview }}</p>
        <p>Orçamento: ${{ movieStore.currentMovie?.budget }}</p>
        <p>Avaliação: {{ movieStore.currentMovie?.vote_average }}</p>
      </div>
    </div>
  </div>

  <p class="produtora">Produtoras</p>
  <div class="companies">
    <template
      v-for="company in movieStore.currentMovie.production_companies"
      :key="company.id"
    >
      <img
        v-if="company.logo_path"
        :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
        :alt="company.name"
      />
      <p v-else>{{ company.name }}</p>
    </template>
  </div>
  </main>
</template>

<style scoped>
  .main {
    display: flex;
    justify-content: center;
    padding: 3rem;
    min-height: 30vw;
    color: #e5e5e5;
  }

  .content {
    display: flex;
    gap: 2rem;
    min-width: 50vw;
    padding: 2rem;
    background: rgb(17, 68, 92);
    border-radius: 20px;
    backdrop-filter: blur(12px);
    box-shadow: 3px 3px 20px rgba(31, 72, 95, 0.486);
    transition: 0.3s ease;
  }

  .content:hover {
    box-shadow: 3px 3px 20px rgba(131, 131, 131, 0.527);
  }

  .poster {
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-width: 600px;
  }

  h1 {
    font-size: 2rem;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: #cfcfcf;
    line-height: 1.4;
    font-size: 1rem;
  }

  p:first-of-type {
    color: #bbbbbb;
    font-style: italic;
  }

  .companies {
    margin: 2rem auto;
    margin-bottom: 3vw;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    background: rgb(17, 68, 92);
    padding: 1.5rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    max-width: 900px;
  }

  .companies img {
    height: 50px;
    width: auto;
    object-fit: contain;
    filter: brightness(0.9);
    transition: 0.3s ease;
  }

  .companies img:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }

  .companies p {
    color: #aaa;
    font-size: 0.9rem;
  }
  .produtora {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }
  /* Ajuste responsivo */
  @media (max-width: 700px) {
    .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    img {
      width: 60%;
    }

    .details {
      align-items: center;
    }
  }
  button {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  margin: 2vw 0 2vw 2vw;
  cursor: pointer;
}
</style>
