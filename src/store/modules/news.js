import axios from "axios";
export default {
  state: {
    sources: "",
    news: [],
    resultsNumber: ""
  },
  getters: {
    getNews: state => state.news,
    getResultsNumber: state => state.resultsNumber
  },
  mutations: {
    SET_SOURCES(state, sources) {
      const sourcesList = [];
      sources.slice(1, 20).forEach(source => sourcesList.push(source.id));
      state.sources = sourcesList.join(",");
    },
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_MORE_NEWS(state, news) {
      news.forEach(el => state.news.push(el));
    },
    SET_MAX_RESULTS_NUMBER(state, maxResNum) {
      state.resultsNumber = maxResNum;
    }
  },
  actions: {
    async fetchSources({ commit, dispatch }) {
      const response = await axios.get("https://newsapi.org/v2/sources", {
        params: {
          apiKey: process.env.VUE_APP_API_KEY,
          language: "en",
          category: "general"
        }
      });
      commit("SET_SOURCES", response.data.sources);
      dispatch("fetchNews");
    },
    async fetchNews({ rootState, commit }) {
      const response = await axios.get("http://newsapi.org/v2/everything", {
        params: {
          apiKey: process.env.VUE_APP_API_KEY,
          from: rootState.filters.time ? rootState.filters.time.value : "", //to avoid errors when filter is empty(multiselect by default return object)
          sortBy: rootState.filters.sortBy
            ? rootState.filters.sortBy.value
            : "",
          sources: rootState.news.sources,
          pageSize: rootState.pagination.pageSize,
          page: rootState.pagination.currentPage,
          language: "en"
        }
      });
      if (rootState.pagination.showMore) {
        commit("SET_MORE_NEWS", response.data.articles);
      } else {
        commit("SET_NEWS", response.data.articles);
      }
      commit("SET_MAX_RESULTS_NUMBER", response.data.totalResults);
    }
  }
};
