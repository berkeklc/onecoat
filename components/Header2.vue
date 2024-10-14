<template>
	<div>
		<header class="header2">
			<nav>
				<ul>
					<li>
						<NuxtLink to="/" exact-active-class="active" exact
							>home</NuxtLink
						>
					</li>
					<li>
						<NuxtLink to="/about" active-class="active"
							>about</NuxtLink
						>
					</li>
					<li>
						<NuxtLink to="/products" active-class="active"
							>products</NuxtLink
						>
					</li>
					<li>
						<NuxtLink to="/faq" active-class="active">faq</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/contact" active-class="active"
							>contact</NuxtLink
						>
					</li>
				</ul>
			</nav>
		</header>
		<div class="logoarea" style="display: none">
			<Logo />
		</div>
	</div>
</template>

<style scoped>
.header2 {
	position: absolute;
	width: 100%;
	top: 0;
}
.logoarea {
	position: absolute;
	right: 30px;
	top: 30px;
}
</style>
