import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/views/Home.vue'
import AboutView from '../components/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
