import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { setupRouter } from './router';
// noinspection JSIgnoredPromiseFromCall
loadFonts()

const app = createApp(App)
setupRouter(app)
app.use(vuetify)
app.mount('#app')
