<template>
	<div class="urun_wrap">
		<div class="center1xx">
			<div class="urun_grid">
				<div class="content">
					<div class="title">
						EASY APPLICATION<b>AND MAINTENANCE</b>
					</div>
					<div class="icerik">
						Natura One Coat was born out of a passion for natural
						materials and the desire to enhance the beauty of wood
						in its most authentic form. The brand’s story is rooted
						in a mission that emphasizes the importance of
						preserving and beautifying wood, highlighting the
						harmony between nature and human craftsmanship.
						<br />
						<p>
							The foundation of Natura One Coat lies in a special
							formulation comprising only high-quality natural
							oils and botanical ingredients. The brand’s vision
							was to protect wood while imparting it with a
							natural sheen and color, harnessing the best
							resources that nature has to offer.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.title {
	font-size: 18px;
	margin-top: 50px;
	letter-spacing: 12.5px;
	font-family: 'Avenir Book';
	color: #0e112c;
}
.title b {
	margin-left: 10px;
	font-family: 'Avenir Heavy';
}

.center1 {
	width: 1600px;
	max-width: 96%;
	margin: 0 auto;
}
.center2 {
	width: 1400px;
	max-width: 96%;
	margin: 0 auto;
}
.center3 {
	width: 1200px;
	max-width: 96%;
	margin: 0 auto;
}

.urun_wrap .urun_grid {
	display: grid;
	grid-template-columns: 1fr;
	margin: 20px 0px 20px 30px;
	gap: 20px;
}

.urun_wrap .urun_grid .content {
	align-items: left;
	text-align: left;
}

.urun_wrap .urun_grid .content .subtitle {
	text-align: left;
	font: normal normal 900 88px/120px Avenir;
	font-family: Avenir Book;
	letter-spacing: 0px;
	color: #0e112c;
	opacity: 1;
}

.urun_wrap .urun_grid .content .icerik {
	text-align: left;
	letter-spacing: 0px;
	margin-top: 14px;
	font-size: 14px;
	font-family: Avenir Book;
	color: #000000;
	opacity: 1;
}

.urun_wrap .urun_grid .gorsel {
	text-align: center;
}

.skils_wrap {
	margin: 20px 0px;
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

/* Responsive Kodlar */
@media (max-width: 1200px) {
	.urun_wrap .urun_grid {
		margin: 20px 0;
	}
	.title {
		font-size: 22px;
		letter-spacing: 10px;
	}
	.icerik {
		font-size: 13px;
	}
}

@media (max-width: 992px) {
	.urun_wrap .urun_grid {
		margin: 15px 0;
	}
	.title {
		font-size: 20px;
		letter-spacing: 8px;
	}
	.icerik {
		font-size: 12px;
	}
}

@media (max-width: 768px) {
	.urun_wrap .urun_grid {
		grid-template-columns: 1fr;
		margin: 10px 0;
	}
	.title {
		font-size: 18px;
		letter-spacing: 6px;
	}
	.icerik {
		font-size: 12px;
		line-height: 1.5;
	}
}

@media (max-width: 600px) {
	.urun_wrap .urun_grid {
		margin: 0px;
	}
	.title {
		font-size: 16px;
		letter-spacing: 5px;
	}
	.icerik {
		font-size: 11px;
	}
}

@media (max-width: 480px) {
	.title {
		font-size: 14px;
		letter-spacing: 4px;
	}
	.icerik {
		font-size: 10px;
	}
}
</style>
