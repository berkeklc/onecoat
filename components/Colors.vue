<template>
	<div class="deneme"></div>
	<div v-if="error">{{ error.message }}</div>
	<div v-else-if="!images.length">Loading...</div>
	<div v-else>
		<swiper
			:slides-per-view="10"
			:space-between="7"
			:breakpoints="breakpoints"
		>
			<swiper-slide v-for="(image, index) in images" :key="index">
				<nuxt-link :to="`/products/${image.productKey}`">
					<div class="image-wrapper">
						<img :src="image.src" :alt="image.title" />
						<div class="title">{{ image.title }}</div>
					</div>
				</nuxt-link>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { useRuntimeConfig, useRoute } from '#app'

const images = ref([])
const error = ref(null)
const runtimeConfig = useRuntimeConfig()
const directusBaseUrl = runtimeConfig.public.directusApiUrl

const fetchColors = async () => {
	console.log('Directus API URL:', directusBaseUrl)
	console.log('Directus API Key:', runtimeConfig.public.directusApiKey)
	try {
		const { data } = await axios.get(`${directusBaseUrl}/items/Colors`, {
			headers: {
				Authorization: `Bearer ${runtimeConfig.public.directusApiKey}`,
			},
		})
		images.value = data.data.map((item) => ({
			src: `${directusBaseUrl}/assets/${item.color_file}`,
			title: item.color_name,
			productKey: item.product_id.key,
		}))
	} catch (err) {
		error.value = err
		console.error('Colors fetch error:', err)
	}
}

onMounted(async () => {
	await fetchColors()
})

const breakpoints = {
	1920: {
		slidesPerView: 11,
	},
	1440: {
		slidesPerView: 11,
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
	padding: 10px 0px;
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
