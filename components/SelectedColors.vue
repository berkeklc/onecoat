<template>
	<div class="custom-select">
		<!-- Seçenekleri liste olarak gösteriyoruz -->
		<div class="selected-option" @click="toggleDropdown">
			<span v-if="selectedOption" class="content_wrap">
				<p>{{ getSelectedOptionText }}</p>
				<img
					:src="getSelectedOptionImage"
					class="img-flag"
					alt="selected option image"
				/>
			</span>
			<span v-else class="content_wrap">
				<p>Clear</p>
				<div class="img_wrap">
					<img
						src="/colors_new/clear.png"
						class="img-flag"
						alt="selected option image"
					/>
					<span class="arrow_iko">></span>
				</div>
			</span>
		</div>

		<ul v-if="dropdownVisible" class="options-list">
			<li
				v-for="option in options"
				:key="option.value"
				@click="selectOption(option)"
			>
				{{ option.text }}
				<img :src="option.src" class="img-flag" alt="option image" />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dropdownVisible: false, // Dropdown'un açık olup olmadığını kontrol eder
			selectedOption: null, // Seçilen opsiyonu tutar
			options: [
				{
					src: '/colors_new/clear.png',
					text: 'Clear',
					value: 'option-1',
				},
				{
					src: '/colors_new/natural_white.png',
					text: 'Natural White',
					value: 'option-2',
				},
				{
					src: '/colors_new/white.png',
					text: 'White',
					value: 'option-3',
				},
				{
					src: '/colors_new/natural_mist.png',
					text: 'Natural Mist',
					value: 'option-4',
				},
				{
					src: '/colors_new/dark_oak.png',
					text: 'Dark Oak',
					value: 'option-5',
				},
				{
					src: '/colors_new/black.png',
					text: 'Black',
					value: 'option-6',
				},
				{
					src: '/colors_new/walnut.png',
					text: 'Walnut',
					value: 'option-7',
				},
				{
					src: '/colors_new/chocolate_brown.png',
					text: 'Chocolate Brown',
					value: 'option-8',
				},
				{
					src: '/colors_new/gray.png',
					text: 'Gray',
					value: 'option-9',
				},
				{
					src: '/colors_new/charcoal.png',
					text: 'Charcoal',
					value: 'option-10',
				},
				{
					src: '/colors_new/soft_white.png',
					text: 'Soft White',
					value: 'option-11',
				},
			],
		}
	},
	computed: {
		getSelectedOptionImage() {
			const option = this.options.find(
				(opt) => opt.value === this.selectedOption
			)
			return option ? option.src : ''
		},
		getSelectedOptionText() {
			const option = this.options.find(
				(opt) => opt.value === this.selectedOption
			)
			return option ? option.text : ''
		},
	},
	methods: {
		toggleDropdown() {
			this.dropdownVisible = !this.dropdownVisible
		},
		selectOption(option) {
			this.selectedOption = option.value
			this.dropdownVisible = false // Seçimden sonra dropdown'ı kapat
		},
	},
}
</script>

<style scoped>
.custom-select {
	position: relative;
	display: inline-block;
}

.selected-option {
	border: 1px solid #2a2c30;
	padding: 10px;
	cursor: pointer;
	font-family: 'Avenir Heavy';
	font-size: 20px;
}

.content_wrap {
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-between;
}

.arrow_iko {
	font-size: 24px;
	color: #2a2c30;
	margin-left: 10px;
}

.img-flag {
	width: 20px;
	height: 20px;
	margin-left: 10px;
	flex-shrink: 0;
}

.options-list {
	position: absolute;
	width: 100%;
	border: 1px solid #ccc;
	background-color: white;
	list-style-type: none;
	padding: 0;
	margin: 0;
	z-index: 1;
}

.options-list li {
	padding: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	white-space: nowrap;
}

.options-list li:hover {
	background-color: #f0f0f0;
}
</style>
