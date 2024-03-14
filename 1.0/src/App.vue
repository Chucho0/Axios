<template>
  <div class="mother">
    <div class="card">
      <div class="card-content">
        <div class="img">
          <img :src="img" alt="" class="card-image">
        </div>
        <div class="father">
          <div class="card-text">
            <h1>Numero: {{ pokemon.id }}</h1>
            <h1>Nombre: {{ pokemon.name }}</h1>
            <h1>Altura: {{ pokemon.height }}</h1>
            <h1>Peso: {{ pokemon.weight }}</h1>
          </div>
          <div class="lineas-text">
            <p>Ataque: {{ ataque }}</p>
            <q-linear-progress reverse :value="ataque2" class="q-mt-md" />
            <p>Defensa: {{ defensa }}</p>
            <q-linear-progress reverse :value="defensa2" class="q-mt-md" />
            <p>Ataque especial: {{ especialataque }}</p>
            <q-linear-progress reverse :value="especialataque2" class="q-mt-md" />
            <p>Defensa especial: {{ especialdefensa }}</p>
            <q-linear-progress reverse :value="especialdefensa2" class="q-mt-md" />
            <p>velocidad: {{ velocidad }}</p>
            <q-linear-progress reverse :value="velocidad2" class="q-mt-md" />
          </div>
        </div>
      </div>
      <button class="card-button" @click="traer()">Aleatorio</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom,
      rgb(255, 0, 0),
      rgb(223, 9, 9),
      rgb(170, 7, 7),
      rgb(139, 7, 7));
}

.card {
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 10px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.img {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.father {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.card-text {
  width: 100%;
}

.card-text h1 {
  font-size: 27px;
  text-align: center;
  height: 50px;
  color: rgb(25, 118, 210);
}

.lineas-text {
  width: 100%;
}

.lineas-text p {
  margin: 0;
  font-size: 17px;
  color: rgb(25, 118, 210);
}

.card-button {
  width: 200px;
  height: 25px;
  border-radius: 10px;
  margin-top: auto;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

button {
  background: #ff0000;
  color: #fff;
  border: none;
  position: relative;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}

button:hover {
  background: #fff;
  color: #ff0000;
}

button:before,
button:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #000000;
  transition: 400ms ease all;
}

button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}

button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}

@media (max-width: 768px) {
  .img {
    width: 50%;
  }

  .father {
    width: 100%;
  }

  .card-text h1 {
    font-size: 20px;
  }

  .card {
    height: 70%;
  }
  .card-content{
    flex-direction: column;
  }
}


@media (max-width: 480px) {
  .card-text h1 {
    font-size: 15px;
  }

  .lineas-text p {
    font-size: 15px;
  }

  .card {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .card-content {
    padding: 10px;
  }

  .father {
    width: 65%;
  }

  .img {
    width: 35%;
  }

  .card-button {
    width: 150px;
  }
}

@media (max-width: 400px) {
  .img {
    width: 40%;
  }

  .father {
    width: 100%;
  }

  .card-button {
    width: 120px;
  }
}
</style>