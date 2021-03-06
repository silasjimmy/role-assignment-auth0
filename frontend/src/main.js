import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'
import title from "./mixins/title";
import { Auth0Plugin } from './auth';
import { domain, clientId, audience } from '../auth_config.json';

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.use(PiniaVuePlugin)
Vue.mixin(title)

const pinia = createPinia()
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')
