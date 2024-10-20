<template>
	<div class="dropdown" @click.stop="toggleDropdown">
		<div class="dropdown-toggle">
			<span>{{
				selectedOption ? selectedOption.text : 'Select an option'
			}}</span>
			<img
				v-if="selectedOption"
				:src="selectedOption.imgSrc"
				alt="selected image"
			/>
		</div>

		<!-- Dropdown Menu -->
		<div v-if="isOpen" class="dropdown-menu">
			<div
				v-for="(item, index) in items"
				:key="index"
				class="dropdown-item"
				@click="selectItem(item)"
			>
				<span>{{ item.text }}</span>
				<img :src="item.imgSrc" alt="item image" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false, // Controls whether the dropdown is open
			selectedOption: null, // Stores the currently selected option
			items: [
				{
					text: 'Option 1',
					value: 'option1',
					imgSrc: 'https://via.placeholder.com/30',
				},
				{
					text: 'Option 2',
					value: 'option2',
					imgSrc: 'https://via.placeholder.com/30',
				},
				{
					text: 'Option 3',
					value: 'option3',
					imgSrc: 'https://via.placeholder.com/30',
				},
			],
		}
	},
	methods: {
		toggleDropdown() {
			this.isOpen = !this.isOpen // Toggle the dropdown open/close
		},
		selectItem(item) {
			this.selectedOption = item // Set the selected option
			this.isOpen = false // Close the dropdown
		},
		handleClickOutside(event) {
			if (!this.$el.contains(event.target)) {
				this.isOpen = false // Close the dropdown if clicked outside
			}
		},
	},
	mounted() {
		document.addEventListener('click', this.handleClickOutside)
	},
	beforeDestroy() {
		document.removeEventListener('click', this.handleClickOutside)
	},
}
</script>

<style scoped>
.dropdown {
	position: relative;
	width: 200px;
	cursor: pointer;
}

.dropdown-toggle {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border: 1px solid #ccc;
	background-color: #fff;
}

.dropdown-toggle img {
	width: 30px;
	height: 30px;
}

.dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	border: 1px solid #ccc;
	background-color: white;
	z-index: 1000;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	cursor: pointer;
}

.dropdown-item:hover {
	background-color: #f0f0f0;
}

.dropdown-item img {
	width: 30px;
	height: 30px;
}
</style>
