<template>
	<div class="container-fluid product-slider-section">
		<div class="row">
			<div class="col-md-6 product-description">
				<img
					src="~/assets/img/naturaproduct.png"
					alt="Natura Onecoat"
					class="product-image"
				/>
				<h2>Natura Onecoat <strong>Wood Oil</strong></h2>
				<p>For Wooden Surfaces</p>
				<p class="product-text">
					Natura Onecoat is a hardwax wood oil that creates bonds
					among the upper fibers of the wood without creating a layer
					on the surface.
				</p>
				<a href="#" class="buy-now-btn">Buy Now</a>
			</div>

			<!-- Sağ tarafta slider (Swiper) -->
			<div class="col-md-6 product-slider">
				<swiper
					:spaceBetween="50"
					:slidesPerView="1"
					navigation
					pagination
				>
					<!-- Slider item 1 -->
					<swiper-slide>
						<div class="slider-item">
							<img
								src="~/assets/img/naturaproduct.png"
								alt="Slider Image 1"
								class="slider-image"
							/>
							<div class="slider-text">
								<h3>Floor</h3>
								<p>One Coat Superior Coverage.</p>
								<button class="show-products-btn">
									Show Products
								</button>
							</div>
						</div>
					</swiper-slide>
					<!-- Slider item 2 -->
					<swiper-slide>
						<div class="slider-item">
							<img
								src="~/assets/img/naturaproduct.png"
								alt="Slider Image 2"
								class="slider-image"
							/>
							<div class="slider-text">
								<h3>Another Feature</h3>
								<p>Description for another feature.</p>
								<button class="show-products-btn">
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
</script>

<style scoped>
.product-description {
	text-align: left;
	padding: 40px;
}

.product-image {
	max-width: 100%;
	height: auto;
}

.product-text {
	margin-top: 10px;
	font-size: 16px;
	color: #666;
}

.buy-now-btn {
	background-color: #007272;
	color: white;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
	text-decoration: none;
	margin-top: 20px;
}

/* Sağ taraf (slider) için stil */
.product-slider {
	position: relative;
}

.slider-item {
	position: relative;
}

.slider-image {
	width: 100%;
	height: auto;
	display: block;
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
