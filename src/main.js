import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import QrcodeVue from 'qrcode.vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia';
const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
    rtl: true, // Enable RTL support
  })
  export default new createVuetify({
    rtl: true, // Enable RTL
  });
app.use(vuetify)
app.use(createPinia());
app.component('QrcodeVue', QrcodeVue); 
app.use(router).mount('#app')
