<script setup>
import mapa from '@/assets/svg/mapa.svg'
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie'
import { useRouter } from 'vue-router'

const movieStore = useMovieStore()
const router = useRouter()

onMounted(() => {
  const elImage = document.getElementById('map')

  // garante que o SVG esteja carregado
  elImage.addEventListener('load', () => {
    const svgDoc = elImage.contentDocument
    if (!svgDoc) return

    const countries = svgDoc.querySelectorAll('g')

    countries.forEach((country) => {
      // efeito hover
      country.addEventListener('mouseenter', () => {
        countries.forEach((otherCountry) => {
          if (otherCountry !== country) {
            otherCountry.style.opacity = '0.3'
            otherCountry.style.filter = 'blur(4px)'
          }
        })
      })
      country.addEventListener('mouseleave', () => {
        countries.forEach((otherCountry) => {
          if (otherCountry !== country) {
            otherCountry.style.opacity = '1'
            otherCountry.style.filter = 'none'
          }
        })
      })

      // clique no país
      country.addEventListener('click', () => {
        const countryId = country.id
        movieStore.getMoviesByCountry(countryId) // busca os filmes em background
        router.push(`/country/${countryId}`) // navega imediatamente
      })
    })
  })
})
</script>

<template>
  <main>
    <div>
      <img src="../../public/img/cinelatin-logo.svg" alt="">
      <p>A América Latina contada pelo olhar do cinema.</p>
      <p>
        Explore o cinema latino-americano através de histórias,
        culturas e emoções que conectam o continente.
      </p>
    </div>
    <h3>ESCOLHA UM PAÍS!</h3>
    <div>
      <object
        id="map"
        :data="mapa"
        alt="mapa da américa latina"
        type="image/svg+xml"
        width="100%"
        height="100%"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
    background-color: #000; /* Fundo preto principal */
    background-image: 
        /* Círculo 1: Vermelho */
        radial-gradient(circle at 10% 45%, #c9288177 0, transparent 45%),
        /* Círculo 2: Verde */
        radial-gradient(circle at 80% 45%, #2eaeb375 0, transparent 45%);

    background-repeat: no-repeat; /* Impede a repetição dos gradientes */
    /* Você pode ajustar o background-size para controlar o tamanho dos círculos */
    background-size: 80vw 80vw, 100vw 200vw;
}

img {
  height: 8vw;
  padding-bottom: 2vw;
}
p {
  color: rgb(255, 227, 100);
  font-size: 1.1vw;
}
h3 {
  color: #ff3679;
  font-size: 1.5vw;
  padding: 1vw 0 0 0;
}
img {
  display: block;
  margin: auto;
  width: 50%;
  padding-top: 20px;
}
</style>
