import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import 'animate.css';

const app = createApp(App)
import './assets/index.css'; 

app.use(store).use(router).mount('#app');
