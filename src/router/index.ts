import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import PropPage from '../views/PropPage.vue'
import PropSyncPage from '../views/PropSyncPage.vue'
import ModelPage from '../views/ModelPage.vue'
import WatchPage from '../views/WatchPage.vue'
import EmitPage from '../views/EmitPage.vue'
import RefPage from '../views/RefPage.vue'
import MixinComponent from '../views/MixinComponent.vue'
import MixinPage from '../views/MixinPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/proppage', name: 'PropPage', component: PropPage },
  { path: '/propsyncpage', name: 'PropSyncPage', component: PropSyncPage },
  { path: '/modelpage', name: 'ModelPage', component: ModelPage },
  { path: '/emitpage', name: 'EmitPage', component: EmitPage },
  { path: '/refpage', name: 'RefPage', component: RefPage },
  { path: '/wacthpage', name: 'WatchPage', component: WatchPage },
  { path: '/mixincomponent', name: 'MixinComponent', component: MixinComponent },
  { path: '/mixinpage', name: 'MixinPage', component: MixinPage },
  {
    path: '/about', name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
