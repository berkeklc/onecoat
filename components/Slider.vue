<template>
  <div class="macbook-slider-container">
    <div class="macbook">
      <img :src="macbookImage" alt="MacBook" />
      <div class="screen">
        <swiper :slides-per-view="1" :loop="true">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide" alt="Slide Image" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
