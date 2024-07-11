<template>
  <div class="container contact">
    <div class="row">
      <div class="col-md-4">
        <h1>in <span>world</span></h1>
        <h1>CONTACT INFORMATION</h1>
        <a href="#formarea">GO TO <span>FORM</span> </a> <br />
        <a href="mailto:info@naturaonecoat.com"
          >info@<span>naturaonecoat.com</span>
        </a>
      </div>
      <div class="col-md-8">
        <client-only>
          <div class="map-container">
            <l-map
              :zoom="zoom"
              :center="center"
              style="height: 500px; width: 100%"
            >
              <l-tile-layer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://carto.com/attributions'>CARTO</a>"
              />
              <l-marker
                v-for="location in locations"
                :key="location.id"
                :lat-lng="[location.lat, location.lng]"
              >
                <l-popup>
                  <h3>{{ location.name }}</h3>
                  <p>{{ location.address }}</p>
                </l-popup>
              </l-marker>
            </l-map>
          </div>
        </client-only>
      </div>
      <div class="col-md-12">
        <h1>PLEASE FILL THE FORM...</h1>
      </div>
      <div class="col-md-12">
        <h1>Come and <span>Ask Us </span></h1>
        <p>Fill out the form below to apply.</p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Submit the Comment" />
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const zoom = ref(2)
const center = ref([20, 0])

const locations = ref([
  {
    id: 1,
    name: 'Natura Onecoat LLC',
    address: '28 Spring St Unit 377 Princeton, NJ 08542',
    lat: 40.3573,
    lng: -74.6672,
  },
  {
    id: 2,
    name: 'Natura Onecoat UK Limited',
    address: '27 Old Gloucester Street, London, United Kingdom, WC1N 3XX',
    lat: 51.5194,
    lng: -0.127,
  },
])

definePageMeta({
  layout: 'header2',
})
</script>

<style scoped>
.contact {
  margin-top: 250px;
}

.leaflet-container {
  background: transparent !important;
}
.map-container {
  height: 500px;
  width: 100%;
  position: relative;
  background-color: transparent;
}
.l-map .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Beyaz overlay */
  pointer-events: none; /* Harita ile etkileşimi kapatır */
}
.headtitle h1 {
  font-family: 'Anton', sans-serif;
  font-size: 140px;
  font-weight: 400;
  color: #232631;
  font-style: normal;
  margin-top: -3.2em;
  margin-bottom: -2.7em;
  position: relative;
  z-index: -1;
}
.headtitle p {
  color: #2c2c2c;
  font-family: 'Avenir Roman';
  text-align: center;
  letter-spacing: 1.67px;
  font-size: 26px;
}
</style>
