// services/directus.js
export const fetchProducts = async () => {
  try {
    const { $axios } = useNuxtApp()
    const response = await $axios.get('/items/products')
    return response.data.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
