import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import { createRouter, createWebHashHistory } from './grouter/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
