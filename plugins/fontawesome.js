// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Nuxt.js'de otomatik CSS eklenmesini devre dışı bırak
config.autoAddCss = false

// Kütüphaneye ikon ekle
library.add(faShoppingCart)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
