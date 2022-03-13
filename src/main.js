import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app"; //acc sign doc
import {store} from './store'

const firebaseConfig = {
  apiKey: "AIzaSyBwD9gTvUcGFIHly-WL0_Oj_ZfwuhNG1oA",
  authDomain: "visit-taiwan-8b567.firebaseapp.com",
  projectId: "visit-taiwan-8b567",
  storageBucket: "visit-taiwan-8b567.appspot.com",
  messagingSenderId: "715582173809",
  appId: "1:715582173809:web:fb138f34c10d5fdc7a21d0",
  measurementId: "G-HSWTXY08SD"
};
initializeApp(firebaseConfig)

const app = createApp(App) ///把客制插件配置的方法


app.use(VueAxios, axios)
app.use(store)
app.use(router).mount('#app')

