import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('../components/CigarIndex')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})