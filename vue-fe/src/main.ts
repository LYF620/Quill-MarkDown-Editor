import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $refs: {
      [key: string]: HTMLElement | any;
    };
    // ... more stuff
  }
}

createApp(App).use(store).use(router).mount('#app');
