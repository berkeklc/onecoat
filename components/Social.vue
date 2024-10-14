<template>
	<div class="social_wrap">
		<div class="center4">
			<div class="social_title">
				<span class="social_title_text1">FOLLOW US</span>
				<span class="social_title_text2">ON INSTAGRAM</span>
				<span class="slash">/</span>
				<span class="social_title_text3">NATURA</span>
				<span class="social_title_text4">ONECOAT</span>
			</div>
		</div>
		<div class="social_grid">
			<swiper :space-between="10" :breakpoints="breakpoints">
				<!-- spaceBetween 20px olarak ayarlandı -->
				<swiper-slide v-for="(image, index) in images" :key="index">
					<div class="social_item">
						<img :src="image.src" :alt="image.title" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const images = [
	{ src: '/instagram_new/natura05.png' },
	{ src: '/instagram_new/natura01.png' },
	{ src: '/instagram_new/natura02.png' },
	{ src: '/instagram_new/natura03.png' },
	{ src: '/instagram_new/natura04.png' },
	{ src: '/instagram_new/natura06.png' },
]

const breakpoints = {
	1920: {
		slidesPerView: 6,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 6,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 3,
		spaceBetween: 10,
	},
	480: {
		slidesPerView: 2,
		spaceBetween: 5,
	},
}
</script>

<style scoped>
.social_wrap {
	padding: 20px 0;
	background-color: #fff;
}

.social_grid {
}

.social_item img {
	object-fit: cover;
	border-radius: 0;
	width: 100%;
	height: auto;
}

.social_item {
}

.social_wrap .social_title {
}

.social_wrap .social_title .social_title_text1,
.social_wrap .social_title .social_title_text2 {
	font-size: 18px;
	letter-spacing: 9px;
	color: #0f0f0d;
}

.social_wrap .social_title .social_title_text1 {
	font-family: 'Avenir Book';
	margin-right: 14px;
}

.social_wrap .social_title .social_title_text2 {
	font-family: 'Avenir Heavy';
}

.social_wrap .social_title .slash {
	font-family: 'Avenir Book';
	font-size: 50px;
	letter-spacing: 10px;
}

.social_wrap .social_title .social_title_text3 {
	font-family: 'Avenir Book';
	font-size: 30px;
	letter-spacing: 0px;
}

.social_wrap .social_title .social_title_text4 {
	font-family: 'Avenir Heavy';
	font-size: 31px;
	letter-spacing: 0px;
}
</style>
