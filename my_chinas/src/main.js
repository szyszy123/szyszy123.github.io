// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import Resource from 'vue-resource'
import '../node_modules/mint-ui/lib/style.css'
import '../node_modules/mint-ui/lib/index.js'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Resource)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
