import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue'

createApp(App).config.globalProperties.$lang = 'es';

const app = createApp(App)
app.use(Quasar)
app.mount('#app')
