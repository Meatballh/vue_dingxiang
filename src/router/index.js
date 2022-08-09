import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
//异步组件
const Area=()=>import('@/views/Area/Area.vue')
const Hesuan=()=>import('@/views/Hesuan/Hesuan.vue')
const Prevention=()=>import('@/views/Prevention/Prevention.vue')
const Travel=()=>import('@/views/Travel/Travel.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/area',
    name: 'Area',
    component: Area
  },
  {
    path: '/hesuan',
    name: 'Hesuan',
    component: Hesuan
  },
  {
    path: '/prevention',
    name: 'Prevention',
    component: Prevention
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
   
]

const router = new VueRouter({
  routes
})

export default router
