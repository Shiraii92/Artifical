// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './assets/tables.scss'

import Vue from 'vue'
import VueParticles from './vue-particles'
import App from './Index'


Vue.use(VueParticles)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#IndexPage',
  components: { App },
  template: '<Index/>'
  
})
