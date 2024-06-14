// plugins/axios.js
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: config.public.directusApiUrl,
    headers: {
      Authorization: `Bearer ${config.public.directusApiKey}`,
    },
  })

  nuxtApp.provide('axios', api)
})
