import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Font Awesome'un otomatik CSS eklemesini devre dışı bırakıyoruz
config.autoAddCss = false

// Kullanmak istediğiniz ikonları kütüphaneye ekleyin
library.add(faShoppingCart)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
