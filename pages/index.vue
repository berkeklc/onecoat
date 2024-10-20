<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 pf50 pt15">
					<h3 class="small-text">
						<span class="one">ONE</span>
						<span class="coat">COAT</span>
					</h3>
					<h1 class="large-text">NATURA</h1>
				</div>
				<div class="col-md-2"></div>
				<div class="col-md-4 p50">
					<Logo />
					<Search />
				</div>
				<HomeSlider />
				<div
					class="col-md-7 d-flex flex-column justify-content-end bg"
				></div>
				<div class="col-md-5"></div>
				<AboutHome />
				<Colors />
				<GalleryHome />
				<div class="video">
					<video width="100%" height="auto" autoplay muted loop>
						<source
							src="~/assets/video/natura2.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				<div class="amazon_text">WHAT OUR <b>CUSTOMERS SAY</b></div>
				<div
					class="elfsight-app-4db7538f-8b88-4fba-ab46-85f9a8dad137"
					data-elfsight-app-lazy
				></div>
				<Social />
				<!--  <DenemeColors />-->
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'default',
})
</script>

<style>
.huflDf {
	display: none !important;
}

.iPXdjg {
	background-color: #fdfdfd !important;
}

.gwWjnk {
	background-color: #fdfdfd !important;
}

.amazon_text {
	margin: 30px 0px 20px 30px;
	font-size: 18px;
	letter-spacing: 9px;
	font-family: 'Avenir Book';
}

.amazon_text span {
	font-size: 'Avenir Heavy';
}
.p50 {
	padding-right: 50px;
}
.pf50 {
	padding-left: 50px;
}

.pt15 {
	padding-top: 15px;
}

.p50 p {
	padding-left: 19px;
}
</style>
