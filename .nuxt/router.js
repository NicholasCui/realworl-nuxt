import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _649f79be = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _096c0873 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _244d4e55 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _1f59dd95 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _5d21e5b7 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _58d0a001 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _062420e2 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _649f79be,
    children: [{
      path: "",
      component: _096c0873,
      name: "home"
    }, {
      path: "/login",
      component: _244d4e55,
      name: "login"
    }, {
      path: "/register",
      component: _244d4e55,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _1f59dd95,
      name: "profile"
    }, {
      path: "/settings",
      component: _5d21e5b7,
      name: "settings"
    }, {
      path: "/editor",
      component: _58d0a001,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _062420e2,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
