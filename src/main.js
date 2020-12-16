import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'; 
// createApp(App).mount('#app')
import mainStyle from './assets/main.css'
import router from './router'

const app = createApp(App)
app.use(mainStyle)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


