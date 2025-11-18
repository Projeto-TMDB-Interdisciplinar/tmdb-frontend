<script setup>
import mapa from '@/assets/svg/mapa.svg'
import { onMounted } from 'vue'

onMounted(() => {
  const elImage = document.getElementById('map')
  elImage.addEventListener('load', function () {
    console.log(elImage.contentDocument)
    const svgDoc = elImage.contentDocument
    if (svgDoc) {
      // get all paths inside the svg
      const countries = svgDoc.querySelectorAll('g')
      console.log(countries)

      countries.forEach((country) => {
        
        // ao passar o mouse por cima do país, desfocar o resto do mapa

        country.addEventListener('mouseenter', () => {
          countries.forEach((otherCountry) => {
            if (otherCountry !== country) {
              otherCountry.style.opacity = '0.3'
              otherCountry.style.filter = 'blur(4px)' // adicionei
            }
          })
        })
        country.addEventListener('mouseleave', () => {
          countries.forEach((otherCountry) => {
            if (otherCountry !== country) {
              otherCountry.style.opacity = '1'
              otherCountry.style.filter = 'none' // adicionei
            }
          })
        })
        // add hover effect

        country.addEventListener('click', () => {
          const countryId = country.id
          // navigate to country view
          window.location.href = `/country/${countryId}`
        })
      })
    }
  })
  //
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
  background-color: rgb(0, 0, 0);
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

h1, p, h3 {
  text-align: center;
  justify-content: center;
  align-items: center;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 20px;
}
</style>
