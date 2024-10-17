<template>
	<swiper :slides-per-view="10" :space-between="7" :breakpoints="breakpoints">
		<swiper-slide v-for="(image, index) in images" :key="index">
			<div class="image-wrapper">
				<img :src="image.src" :alt="image.title" />
				<div class="title">{{ image.title }}</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const images = [
	// Resim URL'lerini ve başlıklarını buraya ekleyin
	{ src: '/colors_new/clear.png', title: 'CLEAR' },
	{ src: '/colors_new/natural_white.png', title: 'NATURAL WHITE' },
	{ src: '/colors_new/white.png', title: 'WHITE' },
	{ src: '/colors_new/natural_mist.png', title: 'NATURAL MIST' },
	{ src: '/colors_new/dark_oak.png', title: 'DARK OAK' },
	{ src: '/colors_new/black.png', title: 'BLACK' },
	{ src: '/colors_new/walnut.png', title: 'WALNUT' },
	{ src: '/colors_new/chocolate_brown.png', title: 'CHOCOLATE BROWN' },
	{ src: '/colors_new/gray.png', title: 'GRAY' },
	{ src: '/colors_new/charcoal.png', title: 'CHARCOAL' },
]

const breakpoints = {
	1920: {
		slidesPerView: 10,
	},
	1440: {
		slidesPerView: 10,
	},
	1024: {
		slidesPerView: 8,
	},
	768: {
		slidesPerView: 4,
	},
	480: {
		slidesPerView: 2,
	},
	320: {
		slidesPerView: 2,
	},
}
</script>

<style scoped>
.swiper {
	padding: 10px 34px;
}
.image-wrapper {
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	opacity: 1;
	position: relative;
	transition: transform 0.5s;
}
.image-wrapper:hover {
	transform: scale(1.05);
	transition: transform 0.5s;
	box-shadow: 0px 3px 6px rgb(0 0 0 / 35%);
}

.image-wrapper img {
	width: 100%;
}

.title {
	position: absolute;
	bottom: 10px;
	width: 100%;
	text-align: center;
	font-size: 11px;
	font-family: 'Avenir Heavy';
	letter-spacing: 0px;
	font-weight: bold;
	color: #ffffff;
	opacity: 1;
}
</style>
