import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import vue-toastification
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import * as Sentry from "@sentry/vue";

const app = createApp(App);

// Use vue-toastification
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
  transition: "Vue-Toastification__bounce",
  maxToasts: 7,
  newestOnTop: true,
  timeout: 3006,
});

Sentry.init({
  app,
  dsn: import.meta.env.VITE_DSN_SENTRY,
  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


app.use(router);
app.mount('#app');
