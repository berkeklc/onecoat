<template>
  <div>
    <h1>Products</h1>

    <NuxtLink to="/productss" exact-active-class="active" exact
      >detail</NuxtLink
    >
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="!products.length">Loading...</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchProducts } from '@/services/directus'

const products = ref([])
const error = ref(null)

onMounted(async () => {
  try {
    products.value = await fetchProducts()
  } catch (err) {
    error.value = err
    console.error('Fetch products error:', err)
  }
})
</script>
