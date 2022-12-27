import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Tools
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

import './assets/index.css'

const app = createApp(App)

Sentry.init({
    app,
    dsn: 'https://9baa2656fa2944c2b38c444cd0194023@o4504310345891840.ingest.sentry.io/4504310769778688',
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: ['localhost', 'my-site-url.com', /^\//],
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
})

app.mount('#app')
