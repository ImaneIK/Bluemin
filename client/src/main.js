import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
// import VueSimpleAlert from "vue-simple-alert";

// Vue.use(VueSimpleAlert);

createApp(App).use(router).mount('#app')
