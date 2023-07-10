// 入口文件
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import "./mock";
import "./eventBus";
import store from "./store";
store.dispatch("setting/fetchSetting");
// Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

import "./api/banner";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// import { getSetting } from "./api/setting";
// getSetting().then((resp) => {
//   console.log(resp);
// });
