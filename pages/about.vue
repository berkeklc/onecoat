<template>
	<Logo />
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
					<swiper-slide>
						<div class="slide-content">
							<div class="left-content">
								<img
									class="aboutbanner"
									src="~/assets/img/aboutSlider/innovative_ideas.png"
									alt=""
								/>

								<div class="item_bar">
									<div class="bar checked_bar"></div>
									<div class="bar"></div>
									<div class="bar"></div>
									<div class="bar"></div>
								</div>
								<div class="slider_img_bar">
									<img src="~/assets/img/n.png" alt="" />
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
									src="~/assets/img/aboutSlider/revolution.png"
									alt=""
								/>
								<div class="item_bar">
									<div class="bar"></div>
									<div class="bar checked_bar"></div>
									<div class="bar"></div>
									<div class="bar"></div>
								</div>
								<div class="slider_img_bar">
									<img src="~/assets/img/n.png" alt="" />
								</div>
								<div class="text-overlay">
									<h1 class="bodoni">
										Breakthrough Products.
									</h1>
									<h1 class="avenir22">
										Revolutionizing Wood Finishes
									</h1>
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
								<h1 class="abtitle">
									Feel The Difference With Premium Hard Wax
									Oil
								</h1>
								<h1 class="bodoni2">
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
								</h1>
								<p class="hard-wax">THE HARD WAX OIL</p>
							</div>
						</div>
					</swiper-slide>

					<swiper-slide>
						<div class="slide-content">
							<div class="left-content">
								<img
									class="aboutbanner"
									src="~/assets/img/aboutSlider/enviromental.png"
									alt=""
								/>
								<div class="item_bar">
									<div class="bar"></div>
									<div class="bar"></div>
									<div class="bar checked_bar"></div>
									<div class="bar"></div>
								</div>
								<div class="slider_img_bar">
									<img src="~/assets/img/n.png" alt="" />
								</div>
								<div class="text-overlay">
									<h1 class="bodoni">
										Breakthrough Products.
									</h1>
									<h1 class="avenir22">
										Enviromental Friendly
									</h1>
									<p class="headerspan">
										We are Sensitive to the Environment for
										Many Green Times!
									</p>
								</div>
							</div>
							<div class="right-content">
								<h1 class="abtitle">VOC/Solvent Free</h1>
								<h1 class="bodoni2">
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
								</h1>
								<p class="hard-wax">THE HARD WAX OIL</p>
							</div>
						</div>
					</swiper-slide>

					<swiper-slide>
						<div class="slide-content">
							<div class="left-content">
								<img
									class="aboutbanner"
									src="~/assets/img/aboutSlider/wood_oil_stain.png"
									alt=""
								/>
								<div class="item_bar">
									<div class="bar"></div>
									<div class="bar"></div>
									<div class="bar"></div>
									<div class="bar checked_bar"></div>
								</div>
								<div class="slider_img_bar">
									<img src="~/assets/img/n.png" alt="" />
								</div>
								<div class="text-overlay">
									<h1 class="bodoni">
										Breakthrough Products.
									</h1>
									<h1 class="avenir22">
										All in One Coat Wood Oil Stain
									</h1>
									<p class="headerspan">
										One Coat Superior Coverage.
									</p>
								</div>
							</div>
							<div class="right-content">
								<h1 class="abtitle">
									One Coat Superior Coverage.
								</h1>
								<h1 class="bodoni2">
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
								</h1>
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
							<div class="col-md-4 text_wrap">
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
							<div class="col-md-4 text_wrap">
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
							<div class="col-md-4 text_wrap">
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
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 35px;
	min-height: 600px;
	align-items: center;
}

.left-content {
	position: relative;
	width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start; /* İçerikleri yukarıya hizala */
}

.right-content {
	width: 33%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 20px;
	padding-right: 20px;
	background-color: #fff;
}

.item_bar {
	position: absolute;
	top: 10%;
	width: 100%;
	padding: 0 50px;
	height: 5px;
	opacity: 60%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 15px;
}

.slider_img_bar {
	position: absolute;
	top: 25%;
	left: 7%;
	width: 102px;
	padding: 20px;
	height: 60%;
}

.swiper-slide:nth-child(1) .slider_img_bar {
	background-color: #51513f;
}

.swiper-slide:nth-child(2) .slider_img_bar {
	background-color: #51473f;
}

.swiper-slide:nth-child(3) .slider_img_bar {
	background-color: #375634;
}

.swiper-slide:nth-child(4) .slider_img_bar {
	background-color: #cfa165;
}

.slider_img_bar img {
	margin-left: 15px;
	margin-top: 10px;
}

.bar {
	background-color: #b1bcaf;
	height: 100%;
	transition: width 0.3s ease;
}

.checked_bar {
	background-color: #fff;
	height: 100%;
	width: 100%;
}

.aboutbanner {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.text-overlay {
	position: absolute;
	top: 50%;
	left: 10%;
	color: white;
	width: 80%;
}

.bodoni {
	font-size: 32px;
	font-family: 'Bodoni Moda', serif;
	font-weight: 300;
	margin: 0;
}

.avenir22 {
	font-size: 148px;
	font-family: 'Helvetica Neue';
	line-height: 147px;
	letter-spacing: -8.88px;
	margin: 0;
}

.headerspan {
	font-size: 21px;
	font-family: 'Avenir Roman';
	color: white;
}

.headerspan span {
	font-family: 'Avenir Heavy';
}

.abtitle {
	font-family: 'Bodoni 72os';
	font-size: 24px;
	letter-spacing: 0px;
	color: #0f0f0d;
}

.bodoni2 {
	width: 82%;
	font-family: 'Avenir Roman', serif;
	font-size: 14px;
	letter-spacing: 0px;
	color: #0d0d0d;
}

.hard-wax {
	font-size: 13px;
	letter-spacing: 6.5px;
	color: #0f0f0d;
	font-family: 'Avenir Book';
	position: absolute;
	bottom: 0;
	margin: 0;
}

.detailp {
	font-family: 'Avenir Roman';
	color: #000000;
	font-size: 14px;
	letter-spacing: 0px;
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

.social {
	margin-bottom: 50px;
	border-top: 1px solid #000000;
	padding: 20px 0;
	border-bottom: 1px solid black;
	margin: 50px 10px;
}

.socialtitle {
	font-size: 26px;
	color: black;
	text-align: center;
	font-family: 'Futura PT', sans-serif;
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

@media (max-width: 1200px) {
	.slide-content {
		flex-direction: column;
		align-items: center;
	}

	.imgarea {
		width: 100% !important;
		padding-right: 0 !important;
	}

	.right-content {
		width: 100%;
		padding-left: 0;
		margin-top: 20px;
	}

	.text_wrap {
		width: 100% !important;
	}

	.left-content {
		width: 100%;
	}

	.text-overlay {
		top: 30%;
		left: 5%;
		width: 90%;
	}

	.avenir22 {
		font-size: 100px;
		line-height: 120px;
		letter-spacing: -5px;
	}

	.bodoni {
		font-size: 24px;
	}

	.headerspan {
		font-size: 16px;
	}
	.col-md-2 {
		display: none;
	}

	.col-md-4.imgarea {
		width: 100%;
	}
}

@media (max-width: 1100px) {
	.aboutHeader {
		margin-top: 50px;
	}

	.hard-wax {
		position: relative;
	}

	.avenir22 {
		letter-spacing: 0px;
	}
}

@media (max-width: 992px) {
	.slide-content {
		flex-direction: column;
	}

	.text-overlay {
		top: 25%;
		left: 5%;
		width: 90%;
	}

	.avenir22 {
		font-size: 80px;
		line-height: 90px;
	}

	.bodoni {
		font-size: 20px;
	}

	.headerspan {
		font-size: 14px;
	}

	.item_bar {
		padding: 0 20px;
	}

	.h1title {
		font-size: 60px;
		letter-spacing: -3px;
	}

	.h5title {
		font-size: 18px;
	}

	.detailp {
		font-size: 12px;
	}

	.imgarea img {
		width: 90%;
	}

	.row section {
		margin-bottom: 150px;
	}

	.right-content {
		width: 100%;
		padding-left: 0;
	}
}

@media (max-width: 900px) {
	.aboutHeader {
		margin-top: 100px;
	}
}

@media (max-width: 768px) {
	.avenir22 {
		font-size: 50px;
		line-height: 70px;
	}

	.bodoni {
		font-size: 18px;
	}

	.headerspan {
		font-size: 12px;
	}

	.h1title {
		font-size: 48px;
	}

	.h5title {
		font-size: 16px;
	}

	.detailp {
		font-size: 11px;
	}

	.item_bar {
		padding: 0 10px;
	}

	.row section {
		margin-bottom: 100px;
	}

	.imgarea img {
		width: 100%;
	}

	.right-content {
		padding: 0;
		width: 100%;
		text-align: center;
		align-items: center;
		align-content: center;
	}

	.text-right {
		text-align: center;
	}

	.text-right a {
		margin-right: 10px;
	}
}

@media (max-width: 576px) {
	.text-overlay {
		top: 20%;
		left: 5%;
		width: 90%;
	}

	.avenir22 {
		font-size: 40px;
		line-height: 50px;
	}

	.bodoni {
		font-size: 16px;
	}

	.headerspan {
		font-size: 10px;
	}

	.h1title {
		font-size: 36px;
		letter-spacing: 0px;
	}

	.h5title {
		font-size: 14px;
	}

	.detailp {
		font-size: 10px;
	}

	.imgarea img {
		width: 100%;
		height: auto;
	}

	.right-content {
		width: 100%;
		padding-left: 0;
		margin-top: 10px;
	}

	.row section {
		margin-bottom: 50px;
	}

	.text-right {
		text-align: center;
	}

	.text-right a {
		margin-right: 5px;
	}
}

@media (max-width: 400px) {
	.text-overlay {
		top: 15%;
		left: 5%;
		width: 90%;
	}

	.avenir22 {
		font-size: 30px;
		line-height: 40px;
	}

	.bodoni {
		font-size: 14px;
	}

	.headerspan {
		font-size: 8px;
	}

	.h1title {
		font-size: 30px;
	}

	.h5title {
		font-size: 12px;
	}

	.detailp {
		font-size: 9px;
	}

	.item_bar {
		padding: 0 5px;
	}
}
</style>
