import Vue from 'vue'
import App from './App'
// import App from './SignIn'
// import App from './test'
//import Extension from './Extension'



global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  
  render: h => h(App)
  //render: h => h(Extension)
})

