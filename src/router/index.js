import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/dashboard',
    children:[
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
        props: { profile: true }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
        props: { profile: true }
      },
      {
        path: '/notification',
        name: 'Notification',
        component: () => import(/* webpackChunkName: "about" */ '../views/Notification.vue'),
        props: { notification: true }
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
        props: { search: true }
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue'),
        props: { search: true }
      },
      {
        path: '/add-calendar',
        name: 'CalendarAdd',
        component: () => import(/* webpackChunkName: "about" */ '../components/calendar/Add.vue'),
        props: { search: true }
      },
      {
        path: '/show-meeting/:id',
        name: 'ShowMeeting',
        component: () => import(/* webpackChunkName: "about" */ '../components/calendar/showMeeting.vue'),
        props: { search: true }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
    ]
  },
  
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
