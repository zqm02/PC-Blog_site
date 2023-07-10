import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "../utils";
Vue.use(VueRouter); //使用一个vue插件

const router = new VueRouter({
  //配置
  routes,
  mode: "history",
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouterTitle(to.meta.title);
  }
});
export default router;
