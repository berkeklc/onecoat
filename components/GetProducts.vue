<template>
	<div v-if="error">{{ error.message }}</div>
	<div v-else-if="!products.length">Loading...</div>
	<div v-else>
		<div class="container">
			<div class="row">
				<div
					v-for="product in products"
					:key="product.id"
					class="col-md-4 mb-4"
				>
					<div class="product-card">
						<nuxt-link :to="'/products/' + product.id">
							<img
								:src="getFullImagePath(product.image2)"
								alt="Product Image"
								class="img-fluid mb-3"
							/>
							<div class="product-info">
								<h5 class="brand-name">
									{{ product.brand }}
									<span>{{ product.name }}</span>
								</h5>
								<div class="product-actions text-center">
									<nuxt-link
										:to="'/products/' + product.id"
										class="readmore"
										>Read More</nuxt-link
									>
									<nuxt-link
										:to="'/products/' + product.id + '/buy'"
										class="buynow"
										>Buy Now</nuxt-link
									>
								</div>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchProducts } from '@/services/directus'
import { useRuntimeConfig } from '#app'

const products = ref([])
const error = ref(null)
const config = useRuntimeConfig()

const getFullImagePath = (imagePath) => {
	console.log(`${config.public.directusApiUrl}/assets/${imagePath}`)
	return `${config.public.directusApiUrl}/assets/${imagePath}`
}

onMounted(async () => {
	try {
		products.value = await fetchProducts()
	} catch (err) {
		error.value = err
		console.error('Fetch products error:', err)
	}
})
</script>

<style scoped>
.brand-name {
	text-align: center;
	color: #000000;
	font-size: 20px;
	text-decoration: none;
	font-family: 'Helvetica Neue';
}
.brand-name span {
	font-weight: bold;
	text-shadow: 0px 0px 0px black;
}
.readmore {
	text-decoration: underline;
	font-family: 'Avenir Roman';
	font-size: 12px;
	color: #000000;
	letter-spacing: 0px;
}
.buynow {
	text-decoration: underline;
	font-family: 'Avenir Roman';
	font-size: 12px;
	letter-spacing: 0px;
	color: #1d707f;
	margin-left: 15px;
}
a {
	text-decoration: none;
}
</style>
