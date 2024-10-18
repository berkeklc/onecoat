<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-4">
				<h1 class="avenir">EASY TO</h1>
				<h1 class="avenir2">APPLY AND MAINTAIN</h1>
			</div>
			<div class="col-md-3">
				<h1>1</h1>
				<p class="st">
					st <br />
					Step
				</p>
				<p class="desc">
					Sand the surface with an 80/120 grit screen for flooring,
					180/220 for furniture and remove the dust.
				</p>
			</div>
			<div class="col-md-3">
				<h1>2</h1>
				<p class="st">
					nd <br />
					Step
				</p>
				<p class="desc">
					Mix 3 part wood oil 2K-A with 1 part wood oil 2K-B
					(Hardener). Stir the mixture well before use.
				</p>
			</div>
			<div class="col-md-3">
				<h1>3</h1>
				<p class="st">
					rd <br />
					Step
				</p>
				<p class="desc">
					Apply Natura Onecoat Wood Oil 2K, spread it out with a
					spatula, a cloth or a polisher and remove the excess oil.
				</p>
			</div>
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
		</div>
	</div>
</template>

<style scoped>
.text-right a:first-child {
	margin-right: 15px;
}
.text-right {
	text-align: right;
}
.col-md-3 {
	width: 21%;
	flex: 1 1 auto;
}
.col-md-3 h1 {
	position: relative;
	top: -25px;
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
	margin-top: 2px;
	margin-bottom: 0;
	text-align: Center;
	float: none;
	font-family: 'Futura PT', sans-serif;
	text-shadow: none;
}
.socialtitle span {
	font-family: 'Futura PT', sans-serif;
	font-weight: bold;
}
.col-md-2 h1 {
	position: relative;
	top: -25px;
}
.avenir {
	font-family: 'Avenir Book';
	font-size: 100px;
	line-height: 137px;
	color: #0e112c;
	text-shadow: None;
}
.avenir2 {
	font-family: 'Avenir Book';
	font-size: 38px;
	color: #0e112c;
	text-shadow: None;
}
h1 {
	float: left;
	text-align: left;
	font-family: 'Helvetica Neue';
	font-size: 148px;
	letter-spacing: 0px;
	color: #212121;
	text-shadow:
		0px 3px 6px #000000,
		0px 3px 6px #00000064;
	opacity: 1;
}
.st {
	text-align: left;
	font-size: 50px;
	font-family: 'Avenir Book';
	line-height: 55px;
	letter-spacing: 0px;
	color: #212121;
	opacity: 1;
}
.desc {
	text-align: left;
	font-family: 'Avenir Roman';
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0px;
	color: #212121;
	opacity: 1;
}
</style>
