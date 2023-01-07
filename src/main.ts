import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// Tools
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

import './assets/index.css'

const app = createApp(App)

app.use(router)


app.mount('#app')
