import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VeeValidatePlugin from './includes/validation';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';
import { auth } from './includes/firebase';
import i18n from './includes/i18n';
import progressBar from './includes/progress-bar';
import 'nprogress/nprogress.css';

progressBar(router);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);
    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.mount('#app');
  }
});
