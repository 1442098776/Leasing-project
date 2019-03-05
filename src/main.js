// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import router from './router/index.js'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
// import Apipath from './api/api'
// process.env.MOCK && require('@/mock')

Vue.config.productionTip = false


Vue.use(vueResource)
Vue.use(MintUI)

Vue.http.options.root = 'http://192.168.2.0.1';
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})