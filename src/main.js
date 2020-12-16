import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'; 
// createApp(App).mount('#app')

import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')


