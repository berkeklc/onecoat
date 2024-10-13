<template>
	<Logo />
	<div class="faq-container">
		<div class="faq-header">
			<h1>YOU GOT <span class="highlight">QUESTIONS</span></h1>
			<p>“Frequently Asked Questions”</p>
		</div>

		<div class="faq-content">
			<div class="faq-list">
				<div v-for="(faq, index) in faqs" :key="index" class="faq-item">
					<div
						class="faq-question"
						@click="toggleAnswer(index)"
						:class="{ active: activeIndexes.includes(index) }"
					>
						<p>{{ faq.question }}</p>
						<font-awesome-icon
							:icon="
								activeIndexes.includes(index)
									? 'chevron-up'
									: 'chevron-down'
							"
						/>
					</div>
					<div
						v-if="activeIndexes.includes(index)"
						class="faq-answer"
					>
						<p>{{ faq.answer }}</p>
					</div>
				</div>
			</div>

			<!-- Sağ Taraf Görselleri -->
			<div class="faq-images">
				<img src="https://via.placeholder.com/300x600" alt="Image 1" />
				<img src="https://via.placeholder.com/300x600" alt="Image 2" />
			</div>
		</div>

		<div class="faq-footer">
			<p>SEE ALL <span class="highlight">PRODUCTS</span></p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndexes = ref([])

const toggleAnswer = (index) => {
	// Eğer zaten açık ise kapatır, değilse açar.
	if (activeIndexes.value.includes(index)) {
		activeIndexes.value = activeIndexes.value.filter((i) => i !== index)
	} else {
		activeIndexes.value.push(index)
	}
}

const faqs = ref([
	{
		question: 'Which color are available for Natura Onecoat Wood Oil 2K?',
		answer: 'Available colors: Clear, Natural White, White, Natural Mist, Dark Oak, Black, Walnut, Chocolate Brown, Gray, Charcoal.',
	},
	{
		question: 'Is Natura Onecoat Wood Oil 2K recommended for exterior use?',
		answer: 'Yes, Natura Onecoat Wood Oil 2K can be used for both interior and exterior wooden surfaces.',
	},
	{
		question:
			'Is there any solvent content or hazardous ingredient in Natura Onecoat Wood Oil 2K?',
		answer: 'Natura Onecoat Wood Oil 2K is free from hazardous solvents and is made with eco-friendly materials.',
	},
	{
		question:
			'Can you protect the wood surface from stains with Natura Onecoat Wood Oil 2K?',
		answer: 'Yes, Natura Onecoat provides protection against stains and spills while maintaining the natural look of the wood.',
	},
	{
		question: 'Can I apply Natura Onecoat Wood Oil 2K with a cloth?',
		answer: 'You can use a cloth. However, we recommend using a plastic application blade or scrubby pads for small surfaces. You can use a cloth to remove any excess oil if necessary.',
	},
	{
		question: 'What is the coverage area of Natura Onecoat Wood Oil 2K?',
		answer: 'Each 12.17 oz. can covers 12 - 18 sq. ft. surface. Coverage can vary depending on the wood type and age.',
	},
])
</script>

<style scoped>
.faq-container {
	padding: 40px;
	font-family: 'Avenir', sans-serif;
}

.faq-content {
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 15px;
}

.faq-images {
	display: grid;
	grid-template-columns: auto auto;
	gap: 20px;
}

.faq-header {
	text-align: center;
	margin-bottom: 40px;
}

.faq-header h1 {
	font-size: 36px;
	font-weight: bold;
}

.faq-header .highlight {
	font-size: 48px;
	font-weight: bold;
}

.faq-header p {
	font-size: 18px;
	font-style: italic;
}

.faq-list {
	border-top: 1px solid #ddd;
}

.faq-item {
	border-bottom: 1px solid #ddd;
	padding: 20px 0;
}

.faq-question {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	transition: color 0.3s ease;
}

.faq-question p {
	font-size: 18px;
	margin: 0;
	font-weight: 500;
}

/* Aktif olan accordion'un rengini değiştir */
.faq-question.active {
	color: #007272; /* Değiştirmek istediğiniz renk */
}

.faq-answer {
	padding-top: 10px;
	font-size: 16px;
	color: #555;
	transition: max-height 0.3s ease;
}

.faq-footer {
	text-align: center;
	margin-top: 50px;
}

.faq-footer .highlight {
	font-weight: bold;
	font-size: 18px;
}
</style>
