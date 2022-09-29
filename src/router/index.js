import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
Vue.prototype.$appInfo = { name: "MOBA", slogan: "Technology for Business", description: "Nada..", version: "1.0.0", autor: "MOBA - TECHNOLOGY FOR BUSINESS", keywords: ["services", "world", "manager", "moba", "business"] }
Vue.prototype.$func = { openDialog: null, name: null }
Vue.prototype.$user = {id:null}
Vue.prototype.$salesman = { name: 'Don Code', contact: '986929110' }
Vue.prototype.$color = {
  primary: '#FFC607',
  secondary: '#1a1d48',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  gray: '#b9b9b9'
}


Vue.use(VueRouter)
Vue.use(VueMeta)

Vue.prototype.$genDate = () => {
  var today = new Date();
  return (today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds() +
    ":" + today.getMilliseconds())
}
const routes = [
  /*      {
        path: '/',
        name: 'Inicio',
        redirect: '/Inicio'
      },  */
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { auth: false }
  },
  {
    path: '/master',
    name: 'Maestro',
    component: () => import(/* webpackChunkName: "master" */ '../views/Master.vue'),
    meta: { auth: false }
  },
  {
    path: '/user',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: { auth: false }
  },
  {
    path: '/products',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    meta: { auth: false }
  },
  {
    path: '/systems',
    name: 'Sistemas',
    component: () => import(/* webpackChunkName: "products" */ '../views/Inused.vue'),
    meta: { auth: false }
  },
  {
    path: '/platforms',
    name: 'Plataformas',
    component: () => import(/* webpackChunkName: "products" */ '../views/Inused.vue'),
    meta: { auth: false }
  },
  {
    path: '/aplications',
    name: 'Aplicaciones',
    component: () => import(/* webpackChunkName: "products" */ '../views/Inused.vue'),
    meta: { auth: false }
  },
  {
    path: '/education',
    name: 'Capacitacion',
    component: () => import(/* webpackChunkName: "business" */ '../views/Inused.vue'),
    meta: { auth: false }
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: () => import(/* webpackChunkName: "products" */ '../views/Inused.vue'),
    meta: { auth: false }
  },
  {
    path: '/equipment',
    name: 'Equipos',
    component: () => import(/* webpackChunkName: "products" */ '../views/Inused.vue'),
    meta: { auth: false }
  },
  {
    path: '/maintenance',
    name: 'Mantenimiento',
    component: () => import(/* webpackChunkName: "business" */ '../views/MyBusiness.vue'),
    meta: { auth: false }
  },
  {
    path: '/education',
    name: 'Capacitacion',
    component: () => import(/* webpackChunkName: "business" */ '../views/MyBusiness.vue'),
    meta: { auth: false }
  },
  {
    path: "*",
    name: '*',
    redirect: '/'
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  if (to.meta.auth === undefined) { return next(); }

  const authRoute = (to.meta.auth);
  if (authRoute) {
    if (!Vue.auth.isAuth()) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else next();
  } else {
    if (Vue.auth.isAuth()) {
      next({ path: '/information' })
    } else next();
  }
  next();
});


export default router
