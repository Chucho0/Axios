<template>
    <main>
        <div class="bienvenida">
            <h1 class="titulo">¡Tu viaje Pokémon comienza aquí!</h1>
            <div class="rutas">
                <router-link to="/pokecards"><button type="button">POKECARDS</button></router-link>
                <router-link to="/pokeplay"><button type="button" class="">POKEPLAY</button></router-link>
            </div>
        </div>
        <video muted autoplay loop>
            <source src="../img/pokemon.mp4" type="video/mp4">
        </video>
        <div class="capa"></div>
    </main>
</template>

<script setup>
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 2;
}

#hero {
    min-height: 100vh;
    position: relative;
}

video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.capa {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    mix-blend-mode: overlay;
}

.bienvenida {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
}

.titulo {
    font-size: 5rem;
    text-align: center;
    color: white;
    text-shadow: 0 0 2px black, 0 0 3px black, 0 0 4px black, 0 0 5px black,
        0 0 6px black, 0 0 7px black, 0 0 8px black, 0 0 9px black, 0 0 10px black;
}

.rutas {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    width: 200px;
    height: 50px;
    margin: 20px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(to bottom,
            rgb(0, 0, 0),
            rgb(73, 71, 71));
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

@media (max-width: 500px) {
    .titulo {
        font-size: 3rem;
    }

    .rutas {
        flex-direction: column;
        justify-content: space-around;
    }
}
</style>