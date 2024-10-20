<template>
	<div class="custom-select">
		<!-- Seçenekleri liste olarak gösteriyoruz -->
		<div class="selected-option" @click="toggleDropdown">
			<span v-if="selectedOption">
				{{ getSelectedOptionText }}
				<img
					:src="getSelectedOptionImage"
					class="img-flag"
					alt="selected option image"
				/>
			</span>
			<span v-else>Select an option</span>
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
					text: 'CLEAR',
					value: 'option-1',
				},
				{
					src: '/colors_new/natural_white.png',
					text: 'NATURAL WHITE',
					value: 'option-2',
				},
				{
					src: '/colors_new/white.png',
					text: 'WHITE',
					value: 'option-3',
				},
				{
					src: '/colors_new/natural_mist.png',
					text: 'NATURAL MIST',
					value: 'option-4',
				},
				{
					src: '/colors_new/dark_oak.png',
					text: 'DARK OAK',
					value: 'option-5',
				},
				{
					src: '/colors_new/black.png',
					text: 'BLACK',
					value: 'option-6',
				},
				{
					src: '/colors_new/walnut.png',
					text: 'WALNUT',
					value: 'option-7',
				},
				{
					src: '/colors_new/chocolate_brown.png',
					text: 'CHOCOLATE BROWN',
					value: 'option-8',
				},
				{
					src: '/colors_new/gray.png',
					text: 'GRAY',
					value: 'option-9',
				},
				{
					src: '/colors_new/charcoal.png',
					text: 'CHARCOAL',
					value: 'option-10',
				},
				{
					src: '/colors_new/soft_white.png',
					text: 'SOFT WHİTE',
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
	width: 250px;
}

.selected-option {
	border: 1px solid #ccc;
	padding: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between; /* Boşlukları düzgün dağıtmak için */
}

.img-flag {
	width: 20px;
	height: 20px;
	margin-left: 10px;
	flex-shrink: 0; /* Resmin küçülmesini önler */
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
	justify-content: space-between; /* Boşlukları düzgün dağıtmak için */
	white-space: nowrap; /* Satırların alt alta geçmesini engeller */
}

.options-list li:hover {
	background-color: #f0f0f0;
}
</style>
