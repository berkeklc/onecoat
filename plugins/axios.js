import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: '/api',
    headers: {
      Authorization: `Bearer ${config.public.directusApiKey}`,
    },
  })

  nuxtApp.provide('axios', api)
})
