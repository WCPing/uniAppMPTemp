import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import Filter from '@/common/Filter'
import Prototype from '@/common/Prototype.js'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import initModal from '@/components/hd-modal/init.js'
import hdModal from '@/components/hd-modal/hd-modal.vue'
import initLoading from '@/components/hd-loading/init.js'
import hdLoading from '@/components/hd-loading/hd-loading.vue'
import initToast from '@/components/hd-toast/init.js'
import hdToast from '@/components/hd-toast/hd-toast.vue'
import initPopup from '@/components/uni-popup/init.js'

Vue.config.productionTip = false
Vue.config.productionTip = false
Filter.init()
Prototype.init()
initLoading(Vue)
initToast(Vue)
initModal(Vue)
initPopup(Vue)
Vue.component('hd-loading', hdLoading)
Vue.component('hd-toast', hdToast)
Vue.component('hd-modal', hdModal)
Vue.component('uni-popup', uniPopup)

new App({ store }).$mount()
