<template>
	<div class="container-fluid product-slider-section">
		<div class="row">
			<div class="slider-buttons pf50">
				<button @click="goToSlide(0)" class="slider-btn">Floor</button>
				<button @click="goToSlide(1)" class="slider-btn pf50">
					INTERIOR
				</button>
				<button @click="goToSlide(2)" class="slider-btn pf50">
					CARE & MAINTENANCE
				</button>
			</div>
			<!-- Sol tarafta ürün bilgileri -->
			<div class="col-md-6 product-description">
				<img
					src="~/assets/img/naturaproduct.png"
					alt="Natura Onecoat"
					class="product-image"
				/>
				<div class="product-info">
					<div class="title">
						<h2 class="product-title">
							<span class="natura_onecoat">Natura Onecoat</span>
							<span class="wood_oil">Wood Oil</span>
						</h2>
						<p class="product-subtitle">For Wooden Surfaces</p>
					</div>
					<div class="button-container">
						<nuxt-link :to="'/products/34'" class="buy-now-btn">
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
						</nuxt-link>
					</div>
					<div class="content">
						<p class="product-text">
							Natura Onecoat is a hardwax wood oil that creates
							bonds among the upper fibers of the wood without
							creating a layer on the surface.
						</p>
					</div>
				</div>
			</div>

			<!-- Sağ tarafta slider (Swiper) -->
			<div class="col-md-6 product-slider">
				<swiper
					ref="mySwiper"
					:spaceBetween="50"
					:slidesPerView="1"
					:loop="true"
					pagination
					@swiper="onSwiper"
				>
					<!-- Slider item 1 -->
					<swiper-slide>
						<div class="slider-item">
							<img
								src="~/assets/img/homeSlider/floor.png"
								alt="Slider Image 1"
								class="slider-image"
							/>
							<div class="item_bar">
								<div class="bar checked_bar"></div>
								<div class="bar"></div>
								<div class="bar"></div>
							</div>
							<div class="slider-text">
								<h3 class="slider-text_title">Floor</h3>
								<p class="slider-text_subtitle">
									One Coat Superior Coverage.
								</p>
								<nuxt-link
									:to="'/products/34'"
									class="show-products-btn"
									>Show Products</nuxt-link
								>
							</div>
						</div>
					</swiper-slide>
					<!-- Slider item 2 -->
					<swiper-slide>
						<div class="slider-item">
							<img
								src="~/assets/img/homeSlider/interior.png"
								alt="Slider Image 2"
								class="slider-image"
							/>
							<div class="item_bar">
								<div class="bar"></div>
								<div class="bar checked_bar"></div>
								<div class="bar"></div>
							</div>
							<div class="slider-text">
								<h3 class="slider-text_title">Interior</h3>
								<p class="slider-text_subtitle">
									One Coat Superior Coverage.
								</p>
								<nuxt-link
									:to="'/products/34'"
									class="show-products-btn"
									>Show Products</nuxt-link
								>
							</div>
						</div>
					</swiper-slide>

					<swiper-slide>
						<div class="slider-item">
							<img
								src="~/assets/img/homeSlider/careand.png"
								alt="Slider Image 2"
								class="slider-image"
							/>
							<div class="item_bar">
								<div class="bar"></div>
								<div class="bar"></div>
								<div class="bar checked_bar"></div>
							</div>
							<div class="slider-text">
								<h3 class="slider-text_title">
									Care & Maintenance
								</h3>
								<p class="slider-text_subtitle">
									One Coat Superior Coverage.
								</p>
								<nuxt-link
									:to="'/products/34'"
									class="show-products-btn"
									>Show Products</nuxt-link
								>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

// Swiper referansını tanımla
const mySwiper = ref(null)

// Swiper yüklendiğinde çağrılacak fonksiyon
const onSwiper = (swiper) => {
	mySwiper.value = swiper
}

// İlgili slayda gitme fonksiyonu
const goToSlide = (index) => {
	if (mySwiper.value) {
		mySwiper.value.slideTo(index)
	}
}
</script>

<style scoped>
.product-description {
	background-color: #f8f8f8;
	text-align: left;
	padding: 25px 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
}

.product-image {
	max-width: 100%;
	height: auto;
	margin-bottom: 50px;
}

.product-info {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
	align-items: center;
}
/*
.text-content {
	max-width: 60%;
}
*/

.title {
	height: 10px;
}

.product-title {
	font-size: 24px;
	font-weight: bold;
	color: #333;
	margin-bottom: 5px;
}

.natura_onecoat {
	padding-right: 5px;
	font-family: 'Avenir Book', sans-serif;
}

.wood_oil {
	font-family: 'Avenir Heavy', sans-serif;
}

.product-subtitle {
	font-size: 18px;
	color: #555;
	margin-bottom: 15px;
	font-family: 'Avenir Book', sans-serif;
}

.product-text {
	margin-top: 30px;
	font-size: 16px;
	color: #666;
	line-height: 1.5;
	font-family: 'Avenir Roman', sans-serif;
}

.button-container {
	flex-shrink: 0;
	text-align: right;
}

.buy-now-btn {
	background-color: #2f6776;
	color: white;
	padding: 17px 65px;
	border: none;
	cursor: pointer;
	margin-bottom: 15px;
	text-decoration: none;
	font-size: 15px;
	transition: background-color 0.3s ease;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
	width: 266px;
	height: 58px;
	letter-spacing: 3px;
	font-family: 'Avenir Roman', sans-serif;
}

.buy-now-btn:hover {
	background-color: #1d4d59;
}

.buy-now-btn i {
	margin-right: 10px;
	font-size: 16px;
}

/* Sağ taraf (slider) için stil */
.product-slider {
	padding-left: 0px;
	position: relative;
	min-height: 500px;
}

.slider-item {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	position: relative;
}

.slider-image {
	width: 100%;
	height: auto;
	display: block;
	object-fit: cover;
}

.item_bar {
	position: absolute;
	top: 25px;
	width: 100%;
	padding: 0 30px;
	height: 6px;
	display: grid;
	grid-template-columns: auto auto auto;
	gap: 5px;
}

.bar {
	background-color: #e5e5df;
	height: 100%;
	width: 100%;
	transition: width 0.3s ease;
}

.checked_bar {
	background-color: #fff;
	height: 100%;
	width: 100%;
	transition: width 0.3s ease;
}

.slider-text {
	position: absolute;
	top: 35%;
	left: 80px;
	color: white;
}

.slider-text .slider-text_title {
	font-family: 'Helvetica Neue';
	font-size: 77px;
	letter-spacing: -4.62px;
	height: 66px;
}

.slider-text .slider-text_subtitle {
	font-family: 'Avenir Roman';
	font-size: 21px;
	letter-spacing: 0px;
	height: 15px;
	margin-bottom: 21px;
	margin-top: 12px;
}

.slider-text .show-products-btn {
	font-size: 10px;
	text-decoration: none;
	letter-spacing: 2px;
	font-family: 'Avenir Roman';
	background-color: white;
	color: black;
	padding: 17px 37px;
	border: none;
	cursor: pointer;
}

/* BUTTON CSS */

.slider-buttons {
	display: flex;
	justify-content: left;
	margin-top: 20px;
}

.slider-btn {
	background: none;
	color: #333333;
	border: none;
	cursor: pointer;
	font-size: 17px;
	font-family: 'Avenir Roman', sans-serif;
	letter-spacing: 9.96px;
	margin-bottom: 40px;
	text-transform: uppercase;
	position: relative;
}

.slider-btn:not(:last-child)::after {
	content: '•';
	color: #333;
	margin-left: 50px;
	font-weight: normal;
}

.slider-btn:focus,
.slider-btn.active {
	font-family: 'Avenir Heavy', sans-serif;
	font-weight: bold;
}

@media (max-width: 930px) {
	.slider-buttons {
		display: none;
	}
}

@media (max-width: 1270px) {
	.title {
		height: 81px;
	}

	.product-slider-section .row {
		display: flex;
		flex-direction: column;
	}

	/* Her iki tarafı tam genişlikte yapıyoruz */
	.product-description,
	.product-slider {
		width: 100%;
	}
}

@media (max-width: 1200px) {
	/* Ekran genişliği 1200px altında ise */
	.product-description,
	.product-slider {
		min-height: 400px; /* Yüksekliği biraz düşürelim */
	}

	.slider-text .slider-text_title {
		font-size: 60px; /* Yazı boyutunu küçültelim */
	}
}

@media (max-width: 930px) {
}

@media (max-width: 768px) {
	.product-description,
	.product-slider {
		min-height: auto;
		padding: 10px;
	}

	.slider-text .slider-text_subtitle {
		font-size: 14px;
	}

	.buy-now-btn {
		width: 180px;
		padding: 8px 30px;
	}

	.slider-image {
		width: 100%; /* Resmi tam genişlikte yap */
	}
}

@media (max-width: 480px) {
	.product-description {
		text-align: center;
		padding: 10px;
	}

	.product-image {
		max-width: 80%;
		height: auto;
		margin-bottom: 20px;
	}

	.slider-text .slider-text_title {
		font-size: 30px;
		letter-spacing: 0px;
	}

	.slider-text .slider-text_subtitle {
		font-size: 12px;
	}

	.buy-now-btn {
		width: 150px;
		padding: 5px 20px;
	}
}
</style>
