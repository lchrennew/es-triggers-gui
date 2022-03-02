import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less'
import AntDesign from 'ant-design-vue'
import router from "./routes/router.js";

createApp(App)
    .use(AntDesign)
    .use(router)
    .mount('#app')
