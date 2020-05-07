import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import news from "./modules/news";
import filters from "./modules/filters";
import newsDetails from "./modules/newsDetails";

export default new Vuex.Store({
  modules: {
    news,
    filters,
    newsDetails
  }
});
