<template>
	<div class="urun_wrap">
		<div class="center1">
			<div class="urun_grid">
				<div class="content">
					<div class="title">ALL IN</div>
					<div class="subtitle">ONE COAT</div>
					<div class="icerik">
						<strong>Once upon a time,</strong> in a quaint little
						town, nestled between rolling hills and serene meadows,
						there stood a coffee company named Osso. It was no
						ordinary company; it was a sanctuary for coffee lovers,
						a place where the art of brewing was taken to new
						heights. <br />
						<br />
						The journey of Osso began with a passionate group of
						coffee enthusiasts. They roamed the world, from the
						misty plantations of Colombia to the bustling markets of
						Ethiopia, in search of the finest coffee beans. Each
						bean was carefully selected, a testament to Osso’s
						commitment to quality.
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="skils_wrap">
		<div class="center3">
			<div class="skils_grid">
				<div class="item">
					<div class="ikon">
						<img src="~/assets/img/paintbrush.png" />
					</div>
					<div class="info">SINGLE <span>COAT</span></div>
				</div>
				<div class="item">
					<div class="ikon">
						<img src="~/assets/img/vegan.png" />
					</div>
					<div class="info">VOC <span>FREE</span></div>
				</div>
				<div class="item">
					<div class="ikon">
						<img src="~/assets/img/en71.png" />
					</div>
					<div class="info en71">EN 71-3</div>
					<div class="info_sub">SAFETY <span>FOR TOYS</span></div>
				</div>
				<div class="item">
					<div class="ikon">
						<img src="~/assets/img/addition-thick-symbol.png" />
					</div>
					<div class="info">MORE <span>AREA</span></div>
				</div>
			</div>
		</div>
	</div>

	<div class="slogan_wrap">
		<div class="slogan_text">
			<span class="slogan_text1">COLOUR</span
			><span class="slogan_text2">OPTIONS</span>
		</div>
	</div>
</template>

<style scoped>
.en71 {
	position: relative;
	top: 7px;
}
.ikon {
	min-height: 61px;
}
.info {
	font-size: 18px;
	letter-spacing: 0px;
	font-family: 'Avenir Book';
	color: #0e112c;
}
.info span {
	font-family: 'Avenir Heavy';
}
.info_sub {
	font-size: 7px;
	font-family: 'Avenir Book';
}
.info_sub span {
	font-family: 'Avenir Heavy';
}
.urun_wrap .urun_grid {
	margin: 70px 0px 20px 70px;
}
.urun_wrap .urun_grid .content {
	align-items: left;
	text-align: left;
}
.urun_wrap .urun_grid .content .title {
	text-align: left;
	font-family: 'Avenir Book';
	font-size: 77px;
	letter-spacing: 0px;
	color: #333333;
	margin-bottom: -35px;
	margin-top: 70px;
}
.urun_wrap .urun_grid .content .subtitle {
	text-align: left;
	font-family: 'Avenir Heavy';
	font-size: 77px;
	letter-spacing: 0px;
	color: #333333;
}
.urun_wrap .urun_grid .content .icerik {
	text-align: left;
	letter-spacing: 0px;
	font-size: 14px;
	width: 70%;
	color: #333333;
}
/*
.urun_wrap .urun_grid .gorsel {
	text-align: center;
}
    */
.skils_wrap {
	margin: 20px 0px 0 0;
}
.skils_wrap .skils_grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 30px;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.skils_wrap .skils_grid .item {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2px;
}
.slogan_wrap .slogan_text {
	margin: 45px 0 5px 34px;
	text-align: left;
	color: #0e112c;
	letter-spacing: 9px;
	font-size: 18px;
}

.slogan_wrap .slogan_text .slogan_text1 {
	margin-right: 10px;
	font-family: 'Avenir Book';
}

.slogan_wrap .slogan_text .slogan_text2 {
	font-family: 'Avenir Heavy';
}
</style>
