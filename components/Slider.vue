<template>
  <div class="macbook-slider-container">
    <div class="macbook">
      <img :src="macbookImage" alt="MacBook" />
      <div class="screen">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <img :src="slide" alt="Slide Image" />
          </SwiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const macbookImage = '/m1.png'
const slides = ['/mac1.jpg', '/mac2.jpg', '/mac3.jpg', '/mac4.jpg']
</script>

<style scoped>
.macbook-slider-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0;
  align-self: center;
}

.macbook {
  position: relative;
}

.macbook img {
  width: 100%;
}

.screen {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 43%;
  overflow: hidden;
}

.screen img {
  width: 116%;
  height: 100%;
  object-fit: cover;
}
</style>

<style scoped>
.slider img {
  width: 100%;
}
</style>
