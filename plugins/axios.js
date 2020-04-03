import { cacheAdapterEnhancer } from 'axios-extensions'
// import Cookies from 'universal-cookie'
import LRUCache from 'lru-cache'
const ONE_HOUR = 1000 * 60 * 60
const defaultCache = new LRUCache({ maxAge: ONE_HOUR })

export default function ({ $axios, store }) {
  const defaults = $axios.defaults
  // https://github.com/kuitos/axios-extensions
  // https://github.com/nuxt-community/axios-module/issues/99#issuecomment-402320350
  defaults.adapter = cacheAdapterEnhancer(defaults.adapter, {
    enabledByDefault: false,
    cacheFlag: 'useCache',
    defaultCache
  })
  $axios.onRequest((config) => {
    config.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwic2VxIjoxLCJwZXJtaXNzaW9uIjo5fQ.tLS3QO91IWv80TyH_KZTHo6wMSG2csAN0jQFWk4Zo2U'
    if (store.$auth.loggedIn) {
      config.headers.common.Authorization = 'Bearer ' + store.$auth.user.apiKey
    }
    config.headers.common.Accept = 'application/json'
  })
}
