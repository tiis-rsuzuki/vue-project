import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import OrderList from '../views/OrderList.vue'
import DesignTaskList from '../views/DesignTaskList.vue'
import OrderDetail from '../views/OrderDetail.vue'

import PartBoard from '../views/PartBoard.vue'
import Notifications from '../views/NotificationView.vue'

// store
import Store from '@/store/index.js'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/design',
    name: 'design',
    component: DesignTaskList,
    meta: { requiresAuth: true }
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrderList,
    meta: { requiresAuth: true }
  },
  {
    path: '/order',
    name: 'order',
    component: OrderDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/parts',
    name: 'parts',
    component: PartBoard,
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//各画面で認証情報のチェックを行う
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.userToken) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
