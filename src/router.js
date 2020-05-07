import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NewsDetails from "./views/NewsDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/news/:newsTitle",
      name: "news",
      component: NewsDetails
    }
  ]
});
