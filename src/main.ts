import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router/router.js'

createApp(App).use(router).use(Antd).mount('#app')
