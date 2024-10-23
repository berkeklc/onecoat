<template>
	<Logo />
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 headtitle">
					<h1>PRODUCTS <span class="of">of</span> NATURA</h1>
					<p>
						Only one coat protection of all kinds of interior wooden
						surfaces for flooring and furniture.
					</p>
				</div>
			</div>
		</div>
		<div class="container-fluid text-center">
			<div class="pbg">
				<img src="~/assets/img/products.png" alt="" />
			</div>
		</div>
		<div v-if="error">{{ error.message }}</div>
		<div v-else-if="hasSearchParam && !filteredProducts.length">
			Sonuç Bulunamadı
		</div>
		<div v-else-if="!filteredProducts.length">Loading...</div>
		<div v-else>
			<div class="container">
				<div class="row">
					<div
						v-for="product in filteredProducts"
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
											:to="
												'/products/' +
												product.id +
												'/buy'
											"
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
	</div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { fetchProducts } from '@/services/directus'
import { useRuntimeConfig, useRoute } from '#app'

const products = ref([])
const filteredProducts = ref([])
const error = ref(null)
const config = useRuntimeConfig()
const route = useRoute()

const hasSearchParam = ref(false)

const getFullImagePath = (imagePath) => {
	return `${config.public.directusApiUrl}/assets/${imagePath}`
}

const filterProducts = (searchTerm) => {
	if (!searchTerm) {
		filteredProducts.value = products.value
	} else {
		const lowerCaseSearchTerm = searchTerm?.toLowerCase() || ''
		filteredProducts.value = products.value.filter((product) =>
			product.name?.toLowerCase().includes(lowerCaseSearchTerm)
		)
	}
}

// Watch for changes in the route query to set hasSearchParam and filter products
watch(
	() => route.query.search,
	(newVal) => {
		hasSearchParam.value = !!newVal
		filterProducts(newVal)
	},
	{ immediate: true }
)

onMounted(async () => {
	try {
		products.value = await fetchProducts()
		filterProducts(route.query.search)
	} catch (err) {
		error.value = err
		console.error('Fetch products error:', err)
	}
})

definePageMeta({
	layout: 'header2',
})
</script>
<style scoped>
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
.of {
	font-family: 'Rionaldo Angelo';
	font-size: 1000px;
	color: #e4e4e4;
	position: relative;
	top: 80px;
	z-index: -1;
	left: 13px;
	margin: 0 50px;
}
.pbg {
	position: relative;
	margin-top: 70px;
	margin-bottom: 70px;
}
.pbg:before {
	content: '';
	position: absolute;
	height: 180px;
	left: 0;
	z-index: -1;
	width: 100%;
	top: 205px;
	background: #232631;
}
.headtitle {
	text-align: center;
	margin-top: 130px;
	position: relative;
}
.headtitle h1 {
	font-family: 'Anton', sans-serif;
	font-size: 140px;
	font-weight: 400;
	color: #232631;
	font-style: normal;
	margin-top: -3.2em;
	margin-bottom: -2.7em;
	position: relative;
	z-index: -1;
}
.headtitle p {
	color: #2c2c2c;
	font-family: 'Avenir Roman';
	text-align: center;
	letter-spacing: 1.67px;
	font-size: 26px;
}
.accordion h1 {
	cursor: pointer;
	user-select: none;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 20px 0;
}
.accordion .details-content {
	overflow: hidden;
	max-height: 0;
	transition: max-height 0.5s ease-out;
}
.accordion .details-content.open {
	max-height: 1000px;
	transition: max-height 0.5s ease-in;
}
.size-coverage {
	margin-top: 20px;
}
.size-coverage h1 {
	font-size: 16px;
	font-weight: bold;
	color: #818181;
	font-size: 13px;
	letter-spacing: 2.6px;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 20px 0;
}
.buy-now {
	margin-top: 335px;
	background-color: #2a2c30;
	color: #fff;
	border: none;
	padding: 29px 20px;
	cursor: pointer;
	font-size: 15px;
	border-radius: 0;
	width: 100%;
	letter-spacing: 3px;
	font-family: 'Avenir Roman';
}
.msds-buttons {
	margin-top: 25px;
}
.msds-buttons button {
	background-color: #f5f5f5;
	color: #004c54;
	border: none;
	padding: 29px 20px;
	cursor: pointer;
	font-size: 14px;
	margin-right: 0;
	width: 50%;
	border-radius: 0px;
}
.bl {
	border-left: 9px solid white !important;
}
</style>
