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
                <div class="row">
                  <div class="col-md-3">
                    <h3 class="psize">TWO SIZE</h3>
                  </div>
                  <div class="col-md-8">
                    <div class="sizes">
                      <a
                        href="#"
                        :class="{ active: activeSize === '1.3L' }"
                        @click="changeProductSize('1.3L')"
                        >1.3L</a
                      >
                      <a
                        href="#"
                        :class="{ active: activeSize === '360ML' }"
                        @click="changeProductSize('360ML')"
                        >360ML</a
                      >
                    </div>
                  </div>
                </div>

                <div class="categories">
                  <h1 class="pftitle">CATEGORIES</h1>
                  <p>Wood Oil</p>
                </div>
                <div class="colors row">
                  <h1 class="pftitle">COLOURS</h1>
                  <div
                    class="col-md-3"
                    v-for="(image, index) in images"
                    :key="index"
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
                  <a href="#">Products</a> <Right />
                  <a href="#">Natura Onecoat Wood Oil</a> <Right />
                  <a href="#">Clear</a>
                </div>
                <p>
                  Natura Onecoat is a hardwax wood oil that creates bonds among
                  the upper fibers of the wood without creating a layer on the
                  surface.
                </p>
                <div class="accordion">
                  <h1 @click="toggleDetails">
                    {{ showDetails ? '-' : '+' }} Details
                  </h1>
                  <div v-if="showDetails" class="details-content">
                    <p>{{ product.desc }}</p>
                  </div>
                </div>
                <button class="buy-now">BUY NOW</button>
                <div class="msds-buttons">
                  <button>MSDS 2K-A</button>
                  <button>MSDS 2K-B</button>
                </div>
              </div>
            </div>
            <div class="row size-coverage">
              <div class="col-md-6">
                <h1 class="pftitle">SIZE</h1>
                <p>12.17 oz.(1.3L)</p>
              </div>
              <div class="col-md-6">
                <h1 class="pftitle">COVERAGE AREA</h1>
                <p>120-190 sq. ft. surface.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 productarea">
            <img :src="currentImage" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const images = [
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

const route = useRoute()
const product = ref(null)
const currentImage = ref('')
const activeSize = ref('1.3L')
const error = ref(null)
const directusBaseUrl = useRuntimeConfig().public.directusApiUrl
const showDetails = ref(false)

const fetchProduct = async (productId) => {
  try {
    const { data } = await axios.get(
      `${directusBaseUrl}/items/products/${productId}`
    )
    product.value = data.data

    if (product.value.image) {
      currentImage.value = `${directusBaseUrl}/assets/${product.value.image}`
    } else {
      currentImage.value = '/path/to/default/image.png'
    }
  } catch (err) {
    error.value = err
    console.error('Product fetch error:', err)
  }
}

const changeProductSize = (size) => {
  activeSize.value = size
  if (size === '1.3L') {
    currentImage.value = `${directusBaseUrl}/assets/${product.value.image}`
  } else if (size === '360ML') {
    currentImage.value = `${directusBaseUrl}/assets/${product.value.image2}`
  }
}

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}

onMounted(async () => {
  await fetchProduct(route.params.id)
})

definePageMeta({
  layout: 'header2',
})
</script>
<style>
.breadcump {
  font-family: 'Avenir Roman';
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 1.2px;
  color: #696d6e;
}
.breadcump a {
  font-family: 'Avenir Roman';
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 1.2px;
  color: #696d6e;
}
.pftitle {
  font-family: 'Helvetica Neue';
  font-size: 13px;
  letter-spacing: 2.6px;
  color: #000000;
}
.details {
  padding-top: 200px;
  padding-left: 46px;
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
  margin-bottom: 200px;
  padding-top: 6px;
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

.sizes a {
  background: #f7f7f8 0% 0% no-repeat padding-box;
  border-radius: 2px;
  font-weight: bold;
  font-family: 'Avenir Roman';
  font-size: 10px;
  color: #696d6e;
  padding: 4px 21px;
  text-decoration: none;
}
a.active {
  background: #175e6c 0% 0% no-repeat padding-box;
  border-radius: 2px;
  font-weight: bold;
  font-family: 'Avenir Roman';
  font-size: 10px;
  color: white;
  padding: 4px 21px;

  text-decoration: none;
}
.accordion h1 {
  cursor: pointer;
  user-select: none;
}
.details-content {
  margin-top: 10px;
}
.size-coverage {
  margin-top: 20px;
}
.size-coverage h1 {
  font-size: 16px;
  font-weight: bold;
}
.size-coverage p {
  font-size: 14px;
}
.buy-now {
  margin-top: 20px;
  background-color: #004c54;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}
.msds-buttons {
  margin-top: 20px;
}
.msds-buttons button {
  background-color: #f5f5f5;
  color: #004c54;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 5px;
}
</style>
