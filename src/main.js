import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/photo.js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
