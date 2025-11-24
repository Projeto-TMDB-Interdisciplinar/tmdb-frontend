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
      <h1>CineLatin</h1>
      <p>A América Latina contada pelo olhar do cinema.</p>
      <p>
        Explore o cinema latino-americano através de histórias, <br />
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
  background-color: black;
  color: white;
  text-align: center;
}
h1 {
  color: #009fb1;
  font-family: cursive;
  font-size: 3rem;
}
p {
  color: yellow;
  font-size: 0.9vw;
}
h3 {
  color: #ff366f;
  padding: 2.5vw 0 0 0;
}
img {
  display: block;
  margin: auto;
  width: 50%;
  padding-top: 20px;
}
</style>
