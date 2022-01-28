import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tv',
        name: 'Tv',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/Tv.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router