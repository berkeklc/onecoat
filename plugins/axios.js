import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = nuxtApp.$config.public.directusApiUrl
  axios.defaults.headers.common['Authorization'] =
    `Bearer ${nuxtApp.$config.public.directusApiKey}`
})
