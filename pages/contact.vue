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
				<h1>PLEASE FILL THE FORM.</h1>
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
	margin-top: 50px;
	padding: 50px;
}

h1 {
	font-family: 'Avenir Heavy', sans-serif;
	font-size: 36px;
	font-weight: 400;
}

h1 span {
	font-family: 'Avenir Book', sans-serif;
	color: #2c2c2c;
}

a {
	font-family: 'Avenir Heavy', sans-serif;
	font-size: 18px;
	color: #232631;
	text-decoration: none;
}

a span {
	font-family: 'Avenir Book', sans-serif;
	color: #2c2c2c;
}

.map-container {
	height: 350px;
	width: 100%;
	margin-bottom: 50px;
}

.leaflet-container {
	background: transparent !important;
}

input[type='text'],
input[type='email'],
textarea {
	width: 48%;
	padding: 15px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	font-family: 'Avenir Book', sans-serif;
	font-size: 16px;
}

textarea {
	width: 100%;
}

input[type='submit'] {
	background-color: #232631;
	color: white;
	padding: 15px 30px;
	border: none;
	cursor: pointer;
	font-family: 'Avenir Heavy', sans-serif;
	font-size: 16px;
	text-transform: uppercase;
	margin-top: 20px;
}

input[type='submit']:hover {
	background-color: #2c2c2c;
}

.col-md-4 h1 {
	font-family: 'Avenir Heavy', sans-serif;
	font-size: 36px;
}

.col-md-4 a {
	display: inline-block;
	margin-top: 15px;
	font-family: 'Avenir Heavy', sans-serif;
	color: #232631;
	font-size: 18px;
}

.col-md-4 a span {
	color: #2c2c2c;
}

.col-md-12 h1 {
	font-family: 'Avenir Heavy', sans-serif;
	font-size: 24px;
	margin-top: 50px;
	margin-bottom: 30px;
}

.col-md-12 h1 span {
	font-family: 'Avenir Book', sans-serif;
	font-size: 24px;
}

form {
	display: flex;
	flex-wrap: wrap;
}

form input[type='text'],
form input[type='email'],
form textarea {
	flex: 1;
}

form input[type='text']:nth-child(odd),
form input[type='email']:nth-child(odd) {
	margin-right: 4%;
}

form input[type='text']:nth-child(even),
form input[type='email']:nth-child(even) {
	margin-left: 0;
}
</style>
