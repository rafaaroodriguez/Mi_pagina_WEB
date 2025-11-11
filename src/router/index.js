import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue')
    },
    {
      path: '/ListaDeTareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/ListaDeTareas/components/ListaDeTareas.vue')
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../modules/Registro/views/RegistrarView.vue')
    }
  ],
})

export default router
