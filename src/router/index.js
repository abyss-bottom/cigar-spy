import { createRouter, createWebHashHistory } from 'vue-router'
import CigarIndex from "@/components/CigarIndex.vue";
import CubaCigar from "@/components/CubaCigar.vue";
import WorldCigar from "@/components/WorldCigar.vue";
import BrandCigarDetail from "@/components/BrandCigarDetail.vue";
import CigarDetail from "@/components/CigarDetail.vue";

const routes = [
    {
        path: '/',
        component: CigarIndex
    },
    {
        path: '/cuba',
        component: CubaCigar
    },
    {
        path: '/world',
        component: WorldCigar
    },
    {
        path: '/brand/detail',
        component: BrandCigarDetail
    },
    {
        path: '/cigar/detail',
        component: CigarDetail
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})