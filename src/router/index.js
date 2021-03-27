import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path:'/home',
        component:() => import('../views/home.vue')
    },
    {
        path:'/fenlei',
        component:() => import ('../views/fenlei.vue')
    },
    {
        path:'/shopcar',
        component:() => import ('../views/shopcar.vue')
    },
    {
        path:'/profile',
        component:() => import ('../views/profile.vue')
    },

]
const router = new VueRouter({
    routes
  })
  
  export default router