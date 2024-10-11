<template>
	<div class="container-fluid product-slider-section">
		<div class="row">
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
						<a href="#" class="buy-now-btn"> BUY NOW </a>
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
					navigation
					pagination
				>
					<!-- Slider item 1 -->
					<swiper-slide>
						<div class="slider-item">
							<img
								src="~/assets/img/941x1057.png"
								alt="Slider Image 1"
								class="slider-image"
							/>
							<div class="slider-text">
								<h3>Floor</h3>
								<p>One Coat Superior Coverage.</p>
								<button
									@click="goToSlide(1)"
									class="show-products-btn"
								>
									Show Products
								</button>
							</div>
						</div>
					</swiper-slide>
					<!-- Slider item 2 -->
					<swiper-slide>
						<div class="slider-item">
							<img
								src="~/assets/img/941x1057.png"
								alt="Slider Image 2"
								class="slider-image"
							/>
							<div class="slider-text">
								<h3>Another Feature</h3>
								<p>Description for another feature.</p>
								<button
									@click="goToSlide(2)"
									class="show-products-btn"
								>
									Explore
								</button>
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

const mySwiper = ref(null)
const activeSlideIndex = ref(0)
const slides = [0, 1] // Slide sayısı burada tanımlandı

// Fonksiyon: İlgili slayda gitme
const goToSlide = (index) => {
	mySwiper.value.swiper.slideTo(index)
}

// Fonksiyon: Aktif slaytın indeksini güncelleme
const updateActiveSlide = () => {
	activeSlideIndex.value = mySwiper.value.swiper.activeIndex
}
</script>

<style scoped>
.product-description {
	background-color: #f8f8f8;
	text-align: left;
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.product-image {
	max-width: 300px;
	height: auto;
	margin-bottom: 20px;
}

.product-info {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
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
	margin-top: 10px;
	font-size: 16px;
	color: #666;
	line-height: 1.5;
}

.button-container {
	flex-shrink: 0;
	text-align: right;
}

.buy-now-btn {
	background-color: #2f6776;
	color: white;
	padding: 15px 30px;
	border: none;
	cursor: pointer;
	text-decoration: none;
	border-radius: 5px;
	font-size: 16px;
	transition: background-color 0.3s ease;
	font-weight: 600;
}

.buy-now-btn:hover {
	background-color: #1d4d59;
}

.buy-now-btn i {
	margin-right: 10px;
	font-size: 20px;
}

/* Sağ taraf (slider) için stil */
.product-slider {
	position: relative;
	padding: 0 40px;
}

.slider-item {
	position: relative;
}

.slider-image {
	width: 100%;
	height: auto;
	display: block;
	object-fit: cover;
}

.slider-text {
	position: absolute;
	bottom: 30px;
	left: 30px;
	color: white;
}

.show-products-btn {
	background-color: white;
	color: black;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
}
</style>
