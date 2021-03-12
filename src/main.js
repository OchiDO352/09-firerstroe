import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import firebase from 'firebase/app'
import "firebase/firestore";
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCZ996gdT5MLw4twuFAmwaWb0-c3Ogm4b4",
    authDomain: "my-cloud-firestore-98b5f.firebaseapp.com",
    projectId: "my-cloud-firestore-98b5f",
    storageBucket: "my-cloud-firestore-98b5f.appspot.com",
    messagingSenderId: "428268522902",
    appId: "1:428268522902:web:274d70b9e721dc6852a1b7",
    measurementId: "G-NN4H5FHVM8"
  };
  firebase.initializeApp(firebaseConfig)
}
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
