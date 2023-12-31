import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../About.vue')
		},
	],
})

export default router