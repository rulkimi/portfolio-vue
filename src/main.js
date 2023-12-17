import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles.css'
import '@/assets/small-projects.css'
// import '@/assets/swiper-bundle.min.css'

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
