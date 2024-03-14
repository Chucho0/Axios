<template>
  <div class="mother">
    <div class="card">
      <div class="card-content">
        <div class="img">
          <img :src="img" alt="" class="card-image">
        </div>
        <div class="father">
          <div class="card-text">
            <h1><b>Numero:</b> {{ pokemon.id }}</h1>
            <h1><b>Nombre: </b> {{ pokemon.name }}</h1>
            <h1><b>Altura:</b> {{ pokemon.height }}</h1>
            <h1><b>Peso:</b> {{ pokemon.weight }}</h1>
          </div>
          <div class="lineas-text">
            <p><b>Ataque:</b> {{ ataque }}</p>
            <q-linear-progress reverse :value="ataque2" class="q-mt-md" />
            <p><b>Defensa:</b> {{ defensa }}</p>
            <q-linear-progress reverse :value="defensa2" class="q-mt-md" />
            <p><b>Ataque especial:</b> {{ especialataque }}</p>
            <q-linear-progress reverse :value="especialataque2" class="q-mt-md" />
            <p><b>Defensa especial:</b> {{ especialdefensa }}</p>
            <q-linear-progress reverse :value="especialdefensa2" class="q-mt-md" />
            <p><b>velocidad:</b> {{ velocidad }}</p>
            <q-linear-progress reverse :value="velocidad2" class="q-mt-md" />
          </div>
        </div>
      </div>
      <button class="card-button" @click="traer()">Siguiente</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
let pokemon = ref({})
let img = ref('')
let ataque = ref(0)
let ataque2 = ref(0)
let defensa = ref(0)
let defensa2 = ref(0)
let especialataque = ref(0)
let especialataque2 = ref(0)
let especialdefensa = ref(0)
let especialdefensa2 = ref(0)
let velocidad = ref(0)
let velocidad2 = ref(0)
async function traer() {
  try {
    let random = parseInt(Math.random() * 500 + 1);
    let r = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random)
    pokemon.value = r.data
    console.log(r.data);
    img.value = r.data.sprites.other.dream_world.front_default
    ataque.value = r.data.stats[1].base_stat
    ataque2.value = ataque.value / 100
    defensa.value = r.data.stats[2].base_stat
    defensa2.value = defensa.value / 100
    especialataque.value = r.data.stats[3].base_stat
    especialataque2.value = especialataque.value / 100
    especialdefensa.value = r.data.stats[4].base_stat
    especialdefensa2.value = especialdefensa.value / 100
    velocidad.value = r.data.stats[5].base_stat
    velocidad2.value = velocidad.value / 100
  } catch (error) {
    console.log(error);
  }
} 
</script>

<style scoped>
.mother {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom,
      rgb(255, 0, 0),
      rgb(223, 9, 9),
      rgb(170, 7, 7),
      rgb(139, 7, 7));
}

.card {
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 5px 5px black;
  background: linear-gradient(to bottom,
      rgb(0, 0, 0),
      rgb(73, 71, 71));
}

.card-content {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.img {
  width: 30%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
}

.card-image {
  width: 100%;
  height: auto;
}

.father {
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.card-text {
  width: 100%;
  font-size: 1.2em;
  height: auto;
  margin-bottom: 50px;
}

.card-text h1 {
  font-size: 1em;
  text-align: center;
  height: 27px;
  color: rgb(255, 255, 255);
}

b {
  color: rgb(255, 0, 0);
}

.lineas-text {
  width: 100%;
}

.lineas-text p {
  margin: 0;
  font-size: 1em;
  color: rgb(255, 255, 255);
}

.card-button {
  height: 25px;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background: #ff0000;
  color: #fff;
  border: none;
  position: relative;
  font-size: 1em;
  padding: 0 8px;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-bottom: 10px;
}

button:hover {
  background: #fff;
  color: #ff0000;
}

button:before,
button:after {
  content: '';
  top: 0;
  right: 0;
  height: 1px;
  width: 0;
  background: #000000;
  transition: 400ms ease all;
}

@media screen and (max-width: 1500px) {
  .img {
  height: 70vh;
}
}

@media screen and (max-width: 1300px) {
  .img {
  height: 60vh;
}
}

@media screen and (max-width: 1100px) {
  .img {
  height: 50vh;
}
}

@media screen and (max-width: 900px) {
  .img {
  height: 40vh;
}
}

@media screen and (max-width: 700px) {
  .card-content {
    flex-direction: column;
  }
  .father {
  width: 100%;
}
.img {
  width: 80%;
}
button {
width: 150px;
}
}

@media screen and (max-width: 500px) {
  button {
width: 200px;
}
.img {
  height: 15vh;
}
}

@media screen and (max-width: 350px) {
  .img {
  height: 10vh;
}
}

</style>