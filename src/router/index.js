import {createRouter, createWebHistory} from 'vue-router'
import CigarIndexLayout from "@/layouts/CigarIndexLayout.vue";
import CigarIndex from "@/components/CigarIndex.vue";


const routes = [
    {
        path: '/',
        component: CigarIndexLayout,
        children: [
            {
                path: '/', component: CigarIndex
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