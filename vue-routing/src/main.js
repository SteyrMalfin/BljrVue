import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path : '/', component : Home},
    { path : '/about', component : About},
    { path : '/contact', component : Contact},
    { path : '*', component : NotFound}
  ],
  mode: 'history'
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')