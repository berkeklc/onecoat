<template>
	<div class="contact">
		<div class="row">
			<div class="col-md-4">
				<div class="maps_text">
					<h1 class="in_world">in <span>world</span></h1>
					<h1 class="contact_information">CONTACT INFORMATION</h1>
					<a href="#formarea" class="go_form_btn"
						>GO TO <span>FORM</span>
					</a>
					<br />
					<a href="mailto:info@naturaonecoat.com" class="mail_btn"
						>info@<span>naturaonecoat.com</span>
					</a>
				</div>
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
				<h1 class="fill_form">PLEASE FILL THE FORM.</h1>
			</div>
			<div class="col-md-12 form-section center3" id="formarea">
				<h1 class="come_and_ask">Come and <span>Ask Us </span></h1>
				<p class="fill_apply">Fill out the form below to apply.</p>
				<form action="">
					<div class="form-row">
						<div class="input-container">
							<input type="text" id="name" required />
							<label for="name">Name</label>
						</div>
						<div class="input-container">
							<input type="text" id="surname" required />
							<label for="surname">Surname</label>
						</div>
					</div>
					<div class="form-row">
						<div class="input-container">
							<input type="text" id="email" required />
							<label for="email">E-mail</label>
						</div>
						<div class="input-container">
							<input type="text" id="phone" required />
							<label for="phone">Phone</label>
						</div>
					</div>
					<div class="form-row">
						<div class="input-container">
							<textarea id="comment" rows="5" required></textarea>
							<label for="comment">Comment</label>
						</div>
					</div>
					<input type="submit" value="Submit the Comment" />
				</form>
				<p class="centered-footer-text">
					* We will never share your email address & you can opt out
					at any time, we promise.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'

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
</script>

<style scoped>
.contact {
	margin-top: 150px;
	padding: 50px;
}

.maps_text .in_world {
	font-size: 85px;
	letter-spacing: 0px;
	font-family: 'Helvetica Neue';
}

.maps_text .in_world span {
	font-family: 'Helvetica Neue', sans-serif;
	font-weight: bold;
	font-style: italic;
}

.maps_text .contact_information {
	font-family: 'Avenir Book', sans-serif;
	font-size: 22px;
	letter-spacing: 11px;
}

.maps_text .go_form_btn {
	background-color: #2c384e;
	text-decoration: none;
	color: #ffffff;
	margin-bottom: 17px;
	padding: 9px 50px;
	font-family: 'Avenir Book', sans-serif;
	font-size: 13px;
	letter-spacing: 5.2px;
	border: 1px solid #1b2532;
	border-radius: 5px;
	display: inline-block;
	text-align: center;
}

.maps_text .go_form_btn span {
	font-family: 'Avenir Heavy', sans-serif;
}

.maps_text .go_form_btn:hover {
	background-color: #1b2532;
	cursor: pointer;
}

.maps_text .mail_btn {
	text-decoration: none;
	margin-top: 10px;
	font-family: 'Avenir Book', sans-serif;
	font-size: 22px;
	letter-spacing: 6.6px;
	color: #0f0f0d;
	text-align: center;
}

.maps_text .mail_btn span {
	font-family: 'Avenir Heavy', sans-serif;
}

.contact .fill_form {
	font-family: 'Helvetica Neue', sans-serif;
	font-size: 39px;
	letter-spacing: 0px;
}

.map-container {
	height: 350px;
	width: 100%;
	margin-bottom: 50px;
}

.leaflet-container {
	background: transparent !important;
}

.form-section {
	margin-top: 40px;
}

.form-section .come_and_ask {
	font-family: 'Avenir Book', sans-serif;
	font-size: 17px;
	height: 11px;
}

.form-section .come_and_ask span {
	font-size: 17px;
	font-family: 'Avenir Heavy', sans-serif;
}

.form-section .fill_apply {
	line-height: 40px;
	height: 55px;
	font-size: 29px;
	font-family: 'Avenir Book', sans-serif;
}

form {
	display: flex;
	flex-direction: column;
	gap: 35px;
}

.form-row {
	display: flex;
	justify-content: space-between;
	gap: 5%;
	margin-bottom: 20px;
}

/*İNPUTS*/

/*

footer .input-container input {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #737374;
    color: #fff;
    font-size: 1rem;
}

footer .input-container input:focus {
    outline: none;
    border-color: white; 
}

footer .input-container input:focus + label,
footer .input-container input:not(:placeholder-shown) + label {
    top: -20px;
    left: 5px;
    font-size: 0.85rem;
    color: white;
}

*/
.input-container {
	position: relative;
	width: 100%;
}

.input-container textarea {
	width: 100%;
}

.input-container input,
.input-container textarea {
	appearance: none;
	width: 100%;
	padding: 10px;
	background-color: transparent;
	border: none;
	letter-spacing: 0.32px;
	border-bottom: 1px solid #00000039;
	font-family: 'Avenir Book', sans-serif;
	font-size: 16px;
	color: #333;
}

input:focus,
textarea:focus {
	outline: none;
}

.input-container label {
	position: absolute;
	left: 10px;
	top: 12px;
	color: #737374;
	font-size: 16px;
	font-family: 'Avenir Book', sans-serif;
	transition: all 0.3s ease;
}

.input-container input[type='email']:focus + label,
.input-container input[type='email']:not(:placeholder-shown):valid + label {
	top: -20px;
	left: 0;
	font-size: 0.85rem;
	color: #232631;
}

.input-container input:focus + label,
.input-container input:not(:placeholder-shown):valid + label,
.input-container textarea:focus + label,
.input-container textarea:not(:placeholder-shown):valid + label {
	top: -20px;
	left: 0;
	font-size: 0.85rem;
	color: #232631;
}

input[type='submit'] {
	background-color: transparent;
	color: #2c384e;
	padding: 10px 0;
	border: none;
	cursor: pointer;
	font-family: 'Avenir Heavy', sans-serif;
	font-size: 18px;
	letter-spacing: 0px;
	text-transform: capitalize;
	margin-top: 20px;
	margin-left: auto;
	display: block;
	width: fit-content;
	border-bottom: 2px solid #bcc2cc;
	transition: all 0.3s ease;
}

input[type='submit']:hover {
	color: #2c2c2c;
	border-bottom-color: #2c2c2c;
}

.centered-footer-text {
	font-family: 'Avenir Book', sans-serif;
	font-size: 14px;
	color: #666;
	text-align: center;
	width: 100%;
	margin: 0 auto;
	padding-top: 40px;
}
</style>
