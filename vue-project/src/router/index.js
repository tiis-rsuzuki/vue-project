import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderList from '../views/OrderList.vue'
import DesignTaskList from '../views/DesignTaskList.vue'
import OrderDetail from '../views/OrderDetail.vue'

import PartBoard from '../views/PartBoard.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/design',
    name: 'design',
    component: DesignTaskList
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrderList
  },
  {
    path: '/order',
    name: 'order',
    component: OrderDetail
  },
  {
    path: '/parts',
    name: 'parts',
    component: PartBoard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
