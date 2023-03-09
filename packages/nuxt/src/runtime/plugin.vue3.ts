import { createPinia, setActivePinia } from 'pinia'
import { defineNuxtPlugin } from '#app'

export const pinia = createPinia()

export default defineNuxtPlugin((nuxtApp) => {  
  nuxtApp.vueApp.use(pinia)
  setActivePinia(pinia)

  if (process.server) {
    nuxtApp.payload.pinia = pinia.state.value
  } else if (nuxtApp.payload && nuxtApp.payload.pinia) {
    pinia.state.value = nuxtApp.payload.pinia
  }

  // Inject $pinia
  return {
    provide: {
      pinia,
    },
  }
})
