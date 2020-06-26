import Vue from 'vue'
import Extension from './Extension'



global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  
  render: h => h(Extension)
})
