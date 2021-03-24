import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import Registry from '@/views/Registry'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/acesso',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Registry,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
