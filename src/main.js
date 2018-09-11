import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faAngleDown, faHeart, faTimes, faInfoCircle, faStar, faLongArrowAltRight,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faAngleDown, faHeart, faTimes, faInfoCircle, faFacebookF, faInstagram, faTwitter, faPinterest, faStar, faLongArrowAltRight )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
