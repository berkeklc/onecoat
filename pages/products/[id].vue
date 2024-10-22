<template>
	<div>
		<div v-if="error">{{ error.message }}</div>
		<div v-else-if="!product">Loading...</div>
		<div v-else>
			<div class="container-fluid section">
				<div class="row">
					<div class="col-md-6 details">
						<div class="row">
							<div class="col-md-6">
								<h1 class="pbrand">{{ product.brand }}</h1>
								<h1 class="ptitle">{{ product.name }}</h1>
								<div class="row">
									<div class="col-md-3">
										<h3 class="psize">TWO SIZE</h3>
									</div>
									<div class="col-md-8 pl0">
										<div class="sizes">
											<a
												href="#"
												:class="{
													active:
														activeSize === '1.3L',
												}"
												@click="
													changeProductSize('1.3L')
												"
												>1.3L</a
											>
											<a
												href="#"
												:class="{
													active:
														activeSize === '360ML',
												}"
												@click="
													changeProductSize('360ML')
												"
												>360ML</a
											>
										</div>
									</div>
								</div>

								<div class="categories row">
									<h1 class="pftitle">CATEGORIES</h1>
									<p class="p0">Wood Oil</p>
								</div>

								<div class="colors row">
									<h1 class="pftitle clrs">COLOURS</h1>
									<div class="col-md-12">
										<SelectedColors />
									</div>
								</div>
							</div>

							<div class="col-md-6">
								<div class="breadcump">
									<a href="#">Products</a> <Right />
									<a href="#">Natura Onecoat Wood Oil</a>
									<Right />
									<a href="#">Clear</a>
								</div>
								<p class="firstdetails">
									Natura Onecoat is a hardwax wood oil that
									creates bonds among the upper fibers of the
									wood without creating a layer on the
									surface.
								</p>
								<div class="accordion">
									<h1
										class="accordiontitle"
										@click="toggleDetails"
									>
										Details {{ showDetails ? '-' : '+' }}
									</h1>
									<div
										v-if="showDetails"
										class="details-content"
									>
										<!-- <p v-html="product.desc"></p> -->
										<div class="msds-buttons">
											<button>MSDS 2K-A</button>
											<button class="bl">
												MSDS 2K-B
											</button>
										</div>
									</div>
								</div>
								<button class="buy-now">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18.972"
										class="cartsvg"
										height="19.003"
										viewBox="0 0 18.972 19.003"
									>
										<g
											id="cart_shop_buy_retail"
											data-name="cart, shop, buy, retail"
											transform="translate(-3 -3)"
										>
											<path
												id="Path_112873"
												data-name="Path 112873"
												d="M23.189,23a2.189,2.189,0,1,0,2.189,2.189A2.189,2.189,0,0,0,23.189,23Zm0,2.919a.73.73,0,1,1,.73-.73A.73.73,0,0,1,23.189,25.919Z"
												transform="translate(-4.865 -5.406)"
												fill="#fff"
											/>
											<path
												id="Path_112874"
												data-name="Path 112874"
												d="M13.946,17.594H8.108a.73.73,0,0,1,0-1.459H19.783a.73.73,0,0,0,.72-.61l1.459-8.756a.73.73,0,0,0-.72-.85H9.567a.73.73,0,0,0,0,1.459H20.381l-1.216,7.3H10.073l-4.2-11.2A.73.73,0,0,0,5.189,3H3.73a.73.73,0,0,0,0,1.459h.954L8.514,14.675H8.108a2.182,2.182,0,0,0-.569,4.292,2.193,2.193,0,1,0,4.083.086h2.324a.73.73,0,0,0,0-1.459ZM10.3,19.783a.73.73,0,1,1-.73-.73.73.73,0,0,1,.73.73Z"
												transform="translate(0 0)"
												fill="#fff"
											/>
										</g>
									</svg>
									BUY NOW
								</button>
							</div>
						</div>
						<div class="row size-coverage">
							<div class="col-md-6">
								<h1 class="pftitle">
									SIZE

									<p class="pfdetail">12.17 oz.(1.3L)</p>
								</h1>
							</div>
							<div class="col-md-6">
								<h1 class="pftitle">
									COVERAGE AREA
									<p class="pfdetail">
										120-190 sq. ft. surface.
									</p>
								</h1>
							</div>
						</div>
					</div>
					<div class="col-md-6 productarea">
						<img :src="currentImage" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const product = ref(null)
const currentImage = ref('')
const activeSize = ref('1.3L')
const error = ref(null)
const directusBaseUrl = useRuntimeConfig().public.directusApiUrl
const showDetails = ref(false)

const fetchProduct = async (productId) => {
	try {
		const { data } = await axios.get(
			`${directusBaseUrl}/items/Products/${productId}`
		)
		product.value = data.data

		if (product.value.image) {
			currentImage.value = `${directusBaseUrl}/assets/${product.value.image}`
		} else {
			currentImage.value = '~/assets/img/naturaproduct.png'
		}
	} catch (err) {
		error.value = err
		console.error('Product fetch error:', err)
	}
}

const changeProductSize = (size) => {
	activeSize.value = size
	if (size === '1.3L') {
		currentImage.value = `${directusBaseUrl}/assets/${product.value.image}`
	} else if (size === '360ML') {
		currentImage.value = `${directusBaseUrl}/assets/${product.value.image2}`
	}
}

const toggleDetails = () => {
	showDetails.value = !showDetails.value
}

onMounted(async () => {
	await fetchProduct(route.params.id)
})

definePageMeta({
	layout: 'header2',
})
</script>

<style>
.color-selectbox {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.color-selectbox select {
	width: 60%;
	padding: 10px;
	font-size: 16px;
}

.selected-image img {
	width: 100px;
	height: 100px;
	object-fit: cover;
	margin-left: 20px;
	border: 1px solid #ddd;
	border-radius: 5px;
}

.clrs {
	margin-top: 77px;
}
.p0 {
	padding: 0;
	color: black;
	font-size: 21px;
	font-family: 'Avenir Roman';
}
.pl0 {
	padding-left: 0;
}
.firstdetails {
	margin-top: 185px;
}
.cartsvg {
	margin-top: -4px;
	margin-right: 10px;
}
.breadcump {
	font-family: 'Avenir Roman';
	text-decoration: none;
	font-size: 12px;
	letter-spacing: 1.2px;
	color: #696d6e;
}
.breadcump a {
	font-family: 'Avenir Roman';
	text-decoration: none;
	font-size: 12px;
	letter-spacing: 1.2px;
	color: #696d6e;
}
.accordiontitle {
	font-family: 'Avenir Roman';

	font-size: 13px;
	letter-spacing: 2.6px;
	color: #000000;
}
.pftitle {
	font-family: 'Avenir Roman';
	font-size: 13px;
	letter-spacing: 2.6px;
	color: #000000;
	padding: 0;
}
.pfdetail {
	font-size: 21px;

	margin: 16px 0 0 0;
	letter-spacing: 0px;
	color: #000000;
	font-family: 'Avenir Roman';
}
.details {
	padding-top: 200px;
	padding-left: 46px;
}
.productarea {
	background: #f5f5f5;
	text-align: center;
	padding-top: 200px;
}
.colors {
	padding-right: 55px;
}
.psize {
	font-family: 'Avenir Roman';
	color: #696d6e;
	font-size: 16px;
	margin-bottom: 200px;
	padding-top: 6px;
}
.pbrand {
	font-family: 'Helvetica Neue';
	font-size: 37px;
	font: normal normal 100 37px/45px Helvetica Neue;
	letter-spacing: -2.22px;
	color: #000000;
	margin-bottom: -2px;
}
.ptitle {
	font-size: 37px;
	font-weight: 400;
	font-size: 37px;
	letter-spacing: -2.22px;
}

.sizes a {
	background: #f7f7f8 0% 0% no-repeat padding-box;
	border-radius: 2px;
	font-weight: bold;
	font-family: 'Avenir Roman';
	font-size: 10px;
	color: #696d6e;
	padding: 4px 21px;
	text-decoration: none;
}
.sizes a.active {
	background: #175e6c 0% 0% no-repeat padding-box;
	border-radius: 2px;
	font-weight: bold;
	font-family: 'Avenir Roman';
	font-size: 10px;
	color: white;
	padding: 4px 21px;

	text-decoration: none;
}
.accordion h1 {
	cursor: pointer;
	user-select: none;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	padding: 20px 0;
}
.details-content {
	margin-top: 10px;
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
	margin-top: 124px;
	background-color: #175e6c;
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
