import { createApp } from 'vue'

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'

// Components
import AppButton from "./components/AppButton.vue";
import AppInput from "./components/AppInput.vue"

const app = createApp(App).use(store).use(router);

app.component('AppButton', AppButton);
app.component('AppInput', AppInput);

app.use(Vue3Toasity, {
    autoClose: 2000,
    style: {
        opacity: '1',
        userSelect: 'initial',
    },
    hideProgressBar: true,
});

app.mount('#app')
