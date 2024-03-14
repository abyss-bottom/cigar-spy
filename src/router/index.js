import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('../components/CigarIndex')
    },
    {
        path: '/cuba',
        component: () => import('../components/CubaCigar.vue')
    },
    {
        path: '/world',
        component: () => import('../components/WorldCigar.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})