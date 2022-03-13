import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import( '@/views/Home.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import( '@/views/Shop.vue'),
  
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import( '@/views/Quiz.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '@/views/Contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '@/views/SignUp.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '@/views/Cart.vue')
  },
  {
    path: '/productdetail',
    name: 'product-detail',
    component: () => import( '@/views/productDetail.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
