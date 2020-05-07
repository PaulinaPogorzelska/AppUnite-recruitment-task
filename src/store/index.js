import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import news from "./modules/news";
import filters from "./modules/filters";

export default new Vuex.Store({
  modules: {
    news,
    filters
  }
});
