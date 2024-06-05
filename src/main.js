import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import vue-toastification
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

// Use vue-toastification
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
  transition: "Vue-Toastification__bounce",
  maxToasts: 7,
  newestOnTop: true,
  timeout: 3006,
});

app.use(router);

app.mount('#app');
