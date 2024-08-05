import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/retro'),
  routes: [
    {
      path: '/retro',
      name: 'home',
      component: HomeView
    },
    {
      path: '/retro/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/retro/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/retro/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
