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
                <h3 class="psize">TWO SIZE</h3>
                <a href="#" @click.prevent="selectSize('1.3L')">1.3L</a>
                <a href="#" @click.prevent="selectSize('360ML')">360 ML</a>

                <div class="categories">
                  <h1>CATEGORIES</h1>
                  <p>Wood Oil</p>
                </div>

                <div class="colors row">
                  <h1>COLOURS</h1>
                  <div
                    class="col-md-3"
                    v-for="(image, index) in product.images"
                    :key="index"
                    @click="selectColor(image)"
                  >
                    <div class="image-wrapper">
                      <img :src="image.src" :alt="image.title" />
                      <div class="title">{{ image.title }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="breadcump">
                  <a href="#">Products</a> >
                  <a href="#">Natura Onecoat Wood Oil</a> >
                  <a href="#">{{ selectedColor.title }}</a>
                </div>
                <p>{{ product.desc }}</p>
              </div>
              <div class="row">
                <div class="col-md-6">SIZE</div>
                <div class="col-md-6">COVERAGE AREA</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 productarea">
            <img :src="selectedImage" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const product = ref(null)
const error = ref(null)
const selectedSize = ref('1.3L')
const selectedColor = ref({ src: '', title: '' })
onMounted(async () => {
  try {
    const { data } = await axios.get(
      `${useRuntimeConfig().public.directusApiUrl}/items/products/${route.params.id}`
    )
    product.value = data.data

    // Set initial color
    if (product.value.images && product.value.images.length > 0) {
      selectColor(product.value.images[0])
    }
  } catch (err) {
    error.value = err
    console.error('Product fetch error:', err)
  }
})

const selectedImage = computed(() => {
  if (!selectedColor.value.src) return ''
  return `${useRuntimeConfig().public.directusApiUrl}/assets/${selectedColor.value.src}`
})

function selectSize(size) {
  selectedSize.value = size
}

function selectColor(image) {
  selectedColor.value = image
}
definePageMeta({
  layout: 'header2',
})
</script>

<style>
.details {
  padding-top: 200px;
}
.productarea {
  background: #f5f5f5;
  text-align: center;
  padding-top: 200px;
}
.colors img {
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 3px;
  padding: 3px;
  margin-bottom: 7px;
}
.colors .col-md-3 {
  padding: 0;
  width: 20%;
}
.colors .image-wrapper {
  text-align: center;
  font-family: 'Avenir Roman';
  letter-spacing: 0.7px;
  font-size: 12px;
  color: black;
}
.psize {
  font-family: 'Avenir Roman';
  color: #696d6e;
  font-size: 16px;
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
</style>
