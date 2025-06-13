import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'   // Root redirects to login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// ✅ Global navigation guard to check auth
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })  // Redirect to login if not authenticated
  } else {
    next()  // Proceed as normal
  }
})

export default router
