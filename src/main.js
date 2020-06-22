import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import store from "./store";
import VueSlickCarousel from 'vue-slick-carousel'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueSlickCarousel,
  render: h => h(App)
}).$mount("#app");