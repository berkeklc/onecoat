<template>
	<div class="search-container">
		<div class="search-icon">
			<svg
				id="Group_49"
				data-name="Group 49"
				xmlns="http://www.w3.org/2000/svg"
				width="18.837"
				height="18.837"
				viewBox="0 0 18.837 18.837"
			>
				<path
					id="Path_463"
					data-name="Path 463"
					d="M2.37,2.369A8.088,8.088,0,0,1,16.176,8.088,8.027,8.027,0,0,1,14.185,13.4l4.492,4.492a.552.552,0,1,1-.781.781L13.4,14.184A8.088,8.088,0,0,1,0,8.088,8.035,8.035,0,0,1,2.37,2.369Zm.781,10.656a6.979,6.979,0,1,0,0-9.875A6.991,6.991,0,0,0,3.151,13.025Z"
					transform="translate(-0.001 0)"
					fill="#3c717f"
				/>
			</svg>
		</div>

		<input
			type="text"
			placeholder="Search"
			class="search-input"
			v-model="searchQuery"
			@keyup.enter="goToProductsPage"
		/>
	</div>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			searchQuery: '',
		}
	},
	methods: {
		goToProductsPage() {
			if (this.searchQuery.trim() !== '') {
				// "searchQuery" dolu ise yönlendirme yap
				window.location.href = `/products?search=${encodeURIComponent(this.searchQuery)}`
			}
		},
	},
}
</script>

<style scoped>
.a {
	text-align: center;
}

.search-input::placeholder {
	color: black; /* Placeholder rengini siyah yapar */
}

@media (max-width: 930px) {
	.search-container {
		display: none;
	}
}
</style>
