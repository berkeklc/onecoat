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
		<div v-if="hasSearchParam">var</div>
		<div class="container">
			<Colors />
		</div>
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
const error = ref(null)
const config = useRuntimeConfig()
const route = useRoute()

const hasSearchParam = ref(false)

const getFullImagePath = (imagePath) => {
	return `${config.public.directusApiUrl}/assets/${imagePath}`
}

// Watch for changes in the route query to set hasSearchParam
watch(
	() => route.query.search,
	(newVal) => {
		hasSearchParam.value = !!newVal
	},
	{ immediate: true }
)

onMounted(async () => {
	try {
		products.value = await fetchProducts()
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

@media (max-width: 1410px) {
	.headtitle h1 {
		font-size: 100px;
		margin-top: -5.2em;
	}

	.of {
		font-size: 950px;
	}
}

@media (max-width: 1210px) {
	.headtitle h1 {
		font-size: 70px;
		margin-top: -7.2em;
	}

	.of {
		font-size: 900px;
	}
}

@media (max-width: 990px) {
	.headtitle h1 {
		font-size: 50px;
		margin-top: -9.2em;
	}

	.of {
		font-size: 850px;
	}
}

@media (max-width: 770px) {
	.headtitle h1 {
		font-size: 35px;
		margin-top: -13.2em;
	}

	.of {
		font-size: 700px;
	}
}

@media (max-width: 510px) {
	.headtitle h1 {
		font-size: 20px;
	}
	.of {
		font-size: 700px;
	}
}

@media (max-width: 400px) {
	.headtitle h1 {
		font-size: 18px;
	}
	.of {
		font-size: 600px;
	}
}

@media (max-width: 370px) {
	.headtitle h1 {
		font-size: 18px;
	}
	.of {
		font-size: 500px;
	}
}
</style>
