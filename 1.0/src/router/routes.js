import { createRouter, createWebHistory } from 'vue-router'
import pokehome from '../pokehome.vue'
import pokecards from '../pokecards.vue'
import pokeplay from '../pokeplay.vue'

const routes = [
    { path: "/", component: pokehome },
    { path: "/pokeplay", name: "pokeplay", component: pokeplay },
    { path: "/pokecards", name: "pokecards", component: pokecards },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router