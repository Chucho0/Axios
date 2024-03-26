import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pokehome.vue')
    },
    {
        path: '/pokecards',
        name: 'pokemonCards',
        component: () => import('../pokecards.vue')
    },
    {
        path: '/pokeplay',
        name: 'pokemonPlay',
        component: () => import('../pokeplay.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});

export default routes;