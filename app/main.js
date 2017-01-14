import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import store from './store'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Quote from './components/Quote.vue'

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/contact-us', component: Contact},
        {path: '/quote', component: Quote},
    ],
});

const app = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
