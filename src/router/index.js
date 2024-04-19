import {createRouter, createWebHistory} from 'vue-router'


const routes = [
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
    },
    {
        path: '/brand/detail',
        component: () => import('../components/BrandCigarDetail.vue')
    },
    {
        path: '/cigar/detail',
        component: () => import('../components/CigarDetail.vue')
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})