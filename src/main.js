import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import sizeWidth from './components/sizeWidth.vue'
import barObj from './components/barObj.vue'



const app =  createApp(App);

app.component('sizeWidth' ,sizeWidth)

app.component('barObj' ,barObj)


app.use(router)

app.mount('#app')
