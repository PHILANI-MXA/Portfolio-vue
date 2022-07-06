import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Skills.vue')
    },
    {
        path: '/work',
        name: 'workt',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/workhistory.vue')
    },
    {
        path: '/testimonials',
        name: 'testimonials',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/interests.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Testimonials.vue')
    },
    {
        path: '/education',
        name: 'eduction',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/education.vue')
    },
    {
        path: '/interests',
        name: 'interests',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/interests.vue')
    },
    {
        path: '/skills',
        name: 'skills',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Skills.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router