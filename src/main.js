import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Axios
import axios from 'axios'
// Vue library for adding breakpoints
import { Vue3Mq, MqResponsive } from 'vue3-mq'


const app = createApp(App)

app.use(router, axios)


app.use(Vue3Mq, {
    breakpoints: {
        phone: 0,
        tablet: 928,
        laptop: 1370,
        desktop: 1906
    }
})
app.component('mq-responsive', MqResponsive)

app.mount('#app')