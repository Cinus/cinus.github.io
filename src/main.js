// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Vuex from 'vuex'
import VueLodash from 'vue-lodash'
import VueSweetalert2 from 'vue-sweetalert2'
import Toasted from 'vue-toasted'
import Options from './options/options'
import store from './store/store.js'
import Index from './Index'

import 'es6-promise/auto'

require('../static/css/base.css')
require('../static/css/common.css')

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(Vuex)
Vue.use(Toasted, Options.ToastOptions)
Vue.use(VueLodash)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store,
    components: { Index },
    template: '<Index/>'
})
