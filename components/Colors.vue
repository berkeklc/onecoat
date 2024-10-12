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
	{ src: '/clearnew.png', title: 'CLEAR' },
	{ src: '/naturalwhite.png', title: 'NATURAL WHITE' },
	{ src: '/whitenew.png', title: 'WHITE' },
	{ src: '/naturalmist.png', title: 'NATURAL MIST' },
	{ src: '/darkoaknews.png', title: 'DARK OAK' },
	{ src: '/blacknew.png', title: 'BLACK' },
	{ src: '/walnutnew.png', title: 'WALNUT' },
	{ src: '/chbrownnew.png', title: 'CHOCOLATE BROWN' },
	{ src: '/graynew.png', title: 'GRAY' },
	{ src: '/charcoalnew.png', title: 'CHARCOAL' },
]

const breakpoints = {
	1920: {
		slidesPerView: 10,
	},
	1024: {
		slidesPerView: 10,
	},
	768: {
		slidesPerView: 4,
	},
	480: {
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
	border-radius: 5px;
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
	border-radius: 5px;
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
