import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5cf2b69e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a8b04300 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _07df019a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _5cf2b69e,
    name: "login"
  }, {
    path: "/signup",
    component: _a8b04300,
    name: "signup"
  }, {
    path: "/",
    component: _07df019a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
