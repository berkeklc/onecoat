<template>
	<div>
		<div class="container-fluid aboutHeader">
			<div class="row">
				<swiper
					ref="abotuSlider"
					:spaceBetween="50"
					:slidesPerView="1"
					:loop="true"
					pagination
					@swiper="onSwiper"
				>
					<!-- Slider item 1 -->
					<swiper-slide>
						<div class="slide-content">
							<div class="left-content">
								<img
									class="aboutbanner"
									src="~/assets/img/aboutimg.png"
									alt=""
								/>
								<div class="item_bar">
									<div class="bar checked_bar"></div>
									<div class="bar"></div>
								</div>
								<div class="text-overlay">
									<h1 class="bodoni">
										Breakthrough Products.
									</h1>
									<h1 class="avenir22">INNOVATIVE IDEAS</h1>
									<p class="headerspan">
										Welcome to Natura Onecoat –
										<span
											>Where Eco-Friendly Innovation
											Shines</span
										>
									</p>
								</div>
							</div>
							<div class="right-content">
								<h1 class="abtitle">FEATURING</h1>
								<h1 class="bodoni2">Natura OneCoat</h1>
								<p class="hard-wax">THE HARD WAX OIL</p>
							</div>
						</div>
					</swiper-slide>

					<swiper-slide>
						<div class="slide-content">
							<div class="left-content">
								<img
									class="aboutbanner"
									src="~/assets/img/aboutimg.png"
									alt=""
								/>
								<div class="item_bar">
									<div class="bar"></div>
									<div class="bar checked_bar"></div>
								</div>
								<div class="text-overlay">
									<h1 class="bodoni">
										Breakthrough Products.
									</h1>
									<h1 class="avenir22">INNOVATIVE IDEAS</h1>
									<p class="headerspan">
										Welcome to Natura Onecoat –
										<span
											>Where Eco-Friendly Innovation
											Shines</span
										>
									</p>
								</div>
							</div>
							<div class="right-content">
								<h1 class="abtitle">FEATURING</h1>
								<h1 class="bodoni2">Natura OneCoat</h1>
								<p class="hard-wax">THE HARD WAX OIL</p>
							</div>
						</div>
					</swiper-slide>
				</swiper>

				<div class="col-md-12">
					<div class="social">
						<div class="row">
							<div class="col-md-3">
								<img src="~/assets/img/n.png" />
							</div>
							<div class="col-md-6 text-center">
								<h1 class="socialtitle">
									“Available In Different
									<span> Wood Stain Colors.”</span>
								</h1>
							</div>
							<div class="col-md-3 text-right">
								<a href="#" target="_blank">
									<img src="~/assets/img/in.png" />
								</a>

								<a href="#" target="_blank">
									<img src="~/assets/img/instagram.png" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="container-flui">
					<div class="row">
						<section class="row">
							<div class="col-md-1"></div>
							<div class="col-md-4">
								<h5 class="h5title">
									Feel The Difference With Premium Hard Wax
									Oil
								</h5>
								<h1 class="h1title">
									Revolutionizing Wood Finishes
								</h1>
								<p class="headerspanalt">
									Welcome to Natura Onecoat –
									<span>
										Where Eco-Friendly Innovation Shines
									</span>
								</p>
								<p class="detailp">
									Dive into a world where sustainability and
									cutting-edge innovation meet at Natura
									Onecoat. We’re not just any brand; we’re
									pioneers, dedicated to pushing the
									boundaries of research and development. By
									embracing the most advanced technologies,
									we’re crafting unique products designed
									specifically for the diverse needs of the
									woodworking community. Our drive for
									groundbreaking solutions, combined with our
									commitment to quality, has made Natura
									Onecoat a leader in the wood coating
									industry, all thanks to our revolutionary
									hard wax oil.
								</p>
							</div>
							<div class="col-md-1"></div>
							<div class="col-md-4 imgarea">
								<img src="~/assets/img/a1.png" alt="" />
							</div>
							<div class="col-md-2 imgarea">
								<img src="~/assets/img/a2.png" alt="" />
							</div>
						</section>
						<section class="row">
							<div class="col-md-1"></div>
							<div class="col-md-4">
								<h5 class="h5title">Breakthrough Products.</h5>
								<h1 class="h1title">Enviroment Friendly</h1>
								<p class="headerspanalt">
									We are Sensitive to the Environment
									<span> for Many Green Times!</span>
								</p>
								<p class="detailp">
									At Natura Onecoat, our dedication to
									environmental stewardship guides all our
									actions. We are committed to developing
									superior products that lessen our
									environmental footprint, and Natura Onecoat
									stands as proof of our dedication. Our
									entire selection of oils is crafted from
									renewable, plant-based materials, minimizing
									environmental damage. Our products, free
									from VOCs and MEKO, underscore our
									commitment to safety and environmental care
								</p>
							</div>
							<div class="col-md-1"></div>
							<div class="col-md-4 imgarea">
								<img src="~/assets/img/a3.png" alt="" />
							</div>
							<div class="col-md-2 imgarea">
								<img src="~/assets/img/a4.png" alt="" />
							</div>
						</section>
						<section class="row">
							<div class="col-md-1"></div>
							<div class="col-md-4">
								<h5 class="h5title">Breakthrough Products.</h5>
								<h1 class="h1title">
									All in One Coat Wood Oil Stain
								</h1>
								<p class="headerspanalt">
									One Coat
									<span>Superior Coverage. </span>
								</p>
								<p class="detailp">
									Proudly representing MCT Chem, Natura
									Onecoat stands as a testament to relentless
									research and thorough testing by our
									passionate R&D team. In collaboration with
									leading wood protection experts from a top
									university, we’ve raised the bar high. Our
									eco-friendly formula is a masterpiece,
									blending high-quality, natural ingredients
									to offer unparalleled performance while
									staying true to our eco-conscious ethos.
								</p>
							</div>
							<div class="col-md-1"></div>
							<div class="col-md-4 imgarea">
								<img src="~/assets/img/a5.png" alt="" />
							</div>
							<div class="col-md-2 imgarea">
								<img src="~/assets/img/a6.png" alt="" />
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

// Swiper referansını tanımla
const mySwiper = ref(null)

// Swiper yüklendiğinde çağrılacak fonksiyon
const onSwiper = (swiper) => {
	mySwiper.value = swiper
}

// İlgili slayda gitme fonksiyonu
const goToSlide = (index) => {
	if (mySwiper.value) {
		mySwiper.value.slideTo(index)
	}
}

definePageMeta({
	layout: 'headeric',
})
</script>

<style>
body {
	overflow-x: hidden;
}

.swiper-slide {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.slide-content {
	display: flex; /* Sol ve sağ bölümleri yan yana diz */
	justify-content: space-between; /* Aralarına boşluk bırak */
	width: 100%;
}

.left-content {
	position: relative;
	width: 75%; /* Sol taraf genişliği */
}

.right-content {
	width: 25%; /* Sağ taraf genişliği */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 20px;
	background-color: #fff; /* Sağ tarafın beyaz arka planı */
}

.item_bar {
	position: absolute;
	top: 10%;
	width: 100%;
	padding: 0 30px;
	height: 6px;
	display: grid;
	grid-template-columns: auto auto auto;
	gap: 5px;
}

.bar {
	background-color: #b1bcaf;
	height: 100%;
	width: 100%;
	transition: width 0.3s ease;
}

.checked_bar {
	background-color: #fff;
	height: 100%;
	width: 100%;
	transition: width 0.3s ease;
}

.aboutbanner {
	width: 100%;
	height: 100%;
	object-fit: cover; /* Görüntünün tam oturmasını sağlar */
}

.text-overlay {
	position: absolute;
	top: 20%;
	left: 10%;
	color: white;
}

.bodoni {
	font-size: 32px;
	margin: 0;
	font-family: 'Bodoni Moda', serif;
	letter-spacing: 1.6px;
	font-weight: 300;
}

.avenir22 {
	font-size: 148px;
	margin: 0;
	letter-spacing: -8.88px;
	font-family: 'Helvetica Neue';
	line-height: 147px;
}

.headerspan {
	font-size: 21px;
	font-family: 'Avenir Roman';
	letter-spacing: 0;
	color: white;
	margin-top: 20px;
}

.headerspan span {
	font-family: 'Avenir Heavy';
	letter-spacing: 0;
	font-size: 21px;
	color: white;
}

.abtitle {
	font-family: 'Avenir Book';
	font-size: 34px;
	letter-spacing: 17px;
	color: #0f0f0d;
}

.bodoni2 {
	font-family: 'Bodoni Moda', serif;
	letter-spacing: 0px;
	color: #0d0d0d;
	font-size: 24px;
}

.hard-wax {
	font-size: 13px;
	letter-spacing: 6.5px;
	color: #0f0f0d;
	font-family: 'Avenir Book';
}

.detailp {
	font-family: 'Avenir Roman';
	letter-spacing: 0px;
	color: #000000;
	font-size: 14px;
}
.h1title {
	letter-spacing: -5.46px;
	color: #000000;
	font-family: 'Helvetica Neue';
	font-size: 91px;
}
.h5title {
	font-family: 'Bodoni Moda', serif;
	letter-spacing: 0.95px;
	color: #000000;
	font-size: 19px;
}
.abtitle {
	font-family: 'Avenir Book';
	font-size: 34px;
	letter-spacing: 17px;
	color: #0f0f0d;
}
.bodoni2 {
	font-family: 'Bodoni Moda', serif;
	letter-spacing: 0px;
	color: #0d0d0d;
	font-size: 24px;
}
.row section {
	margin-bottom: 234px;
}
.imgarea {
	padding-left: 0;
}
.imgarea img {
	width: 100%;
	height: 100%;
}
.pl25 {
	padding-left: 25px;
}
.relative {
	position: relative;
}
.headerspan {
	font-size: 21px;
	font-family: 'Avenir Roman';
	letter-spacing: 0;
	color: white;
}
.headerspan span {
	font-family: 'Avenir Heavy';
	letter-spacing: 0;
	font-size: 21px;
	color: white;
}
.headerspanalt {
	font-size: 13px;
	font-family: 'Avenir Roman';
	letter-spacing: 0;
	color: black;
}
.headerspanalt span {
	font-family: 'Avenir Heavy';
	letter-spacing: 0;
	font-size: 13px;
	color: black;
}
.aboutbanner {
	width: 100%;
}

.aboutHeader {
	padding: 0;
	position: relative;
}

.position-relative {
	position: relative;
}
.text-overlay {
	position: absolute;
	z-index: 3;
	top: 20%;
	left: 10%;
	width: 80%;
	color: white;
}
.text-overlay div:first-child {
	height: 100vh;
}

.vertical-background {
	position: absolute;
	top: 0;
	left: 0;
	width: 102px;
	height: 810px;
	background-color: #51473f;
	z-index: 1;
}

.logo-overlay {
	position: absolute;
	top: -40px;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0.5;
	z-index: 1;
}

.text-content {
	position: relative;
	z-index: 2;
}

.bodoni {
	font-size: 32px;
	margin: 0;
	font-family: 'Bodoni Moda', serif;
	letter-spacing: 1.6px;
	font-weight: 300;
}

.avenir22 {
	font-size: 148px;
	margin: 0;
	letter-spacing: -8.88px;
	font-family: 'Helvetica Neue';
	line-height: 147px;
}

.d-flex {
	display: flex;
}

.flex-column {
	flex-direction: column;
}

.justify-content-center {
	justify-content: center;
}

.align-items-center {
	align-items: center;
}

.hard-wax {
	font-size: 13px;
	letter-spacing: 6.5px;
	color: #0f0f0d;
	position: absolute;
	bottom: 0;
	margin: 0;
	font-family: 'Avenir Book';
	color: black;
}

.social {
	margin-bottom: 50px;
	border-top: 1px solid #000000;
	padding: 20px 0;
	border-bottom: 1px solid black;
	margin: 50px 10px;
}

.socialtitle {
	font-size: 26px;
	color: Black;
	text-align: Center;
	float: none;
	font-family: 'Futura PT', sans-serif;
	text-shadow: none;
}

.socialtitle span {
	font-family: 'Futura PT', sans-serif;
	font-weight: bold;
}

.text-right a:first-child {
	margin-right: 15px;
}

.text-right {
	text-align: right;
}
</style>
