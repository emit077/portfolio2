import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import { routes }  from './app-js/routes.js'
import { store } from './app-js/store.js'
import VueTyperPlugin from 'vue-typer'
import AOS from 'aos';
import 'aos/dist/aos.css';


require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VueRouter)
Vue.use(VueTyperPlugin)

const router=new VueRouter({
	routes,
	mode: 'history'
});

AOS.init({
  duration: 1200,
})


Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	iconfont: 'mdi', 
	render: h => h(App)
}).$mount('#app')
