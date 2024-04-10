import {createRouter, createWebHistory} from 'vue-router'
import CigarIndexLayout from "@/layouts/CigarIndexLayout.vue";


const routes = [
    {
        path: '/',
        component: CigarIndexLayout,
        children: [
            {
                path: '/',
                component: () => import('../components/CigarIndex.vue')
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
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})