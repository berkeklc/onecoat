<template>
	<div>
		<select ref="select" class="form-control">
			<option value="option-1" data-src="http://placehold.it/45x45">
				Option 1
			</option>
			<option value="option-2" data-src="http://placehold.it/45x45">
				Option 2
			</option>
			<option value="option-3" data-src="http://placehold.it/45x45">
				Option 3
			</option>
		</select>
	</div>
</template>

<script>
import $ from 'jquery'
import 'select2'

export default {
	mounted() {
		// Select2'nin sadece istemci tarafında çalıştırılması gerektiğinden mounted() içinde kullanıyoruz
		const formatState = (state) => {
			if (!state.id) {
				return state.text
			}
			var $state = $(
				'<span><img src="' +
					$(state.element).attr('data-src') +
					'" class="img-flag" /> ' +
					state.text +
					'</span>'
			)
			return $state
		}

		$(this.$refs.select).select2({
			minimumResultsForSearch: Infinity,
			templateResult: formatState,
			templateSelection: formatState,
		})
	},

	beforeDestroy() {
		// Bileşen yok edilmeden önce select2'yi temizle
		$(this.$refs.select).select2('destroy')
	},
}
</script>

<style scoped>
.select2-container--default .select2-selection--single {
	border-color: #fff;
	height: 60px;
	padding: 7.5px 0;
	border-radius: 0;
}

.select2-selection__arrow {
	height: 58px;
}

.select2-dropdown {
	border-radius: 0;
	box-shadow: #444 0px 3px 5px;
	border: 0;
}
</style>
