import axios from "axios";
export default {
  state: {
    sources: "",
    news: []
  },
  getters: {
    getNews: state => state.news
  },
  mutations: {
    SET_SOURCES(state, sources) {
      const sourcesList = [];
      sources.slice(0, 20).forEach(source => sourcesList.push(source.id));
      state.sources = sourcesList.join(",");
    },
    SET_NEWS(state, news) {
      news.forEach(news => state.news.push(news));
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
          language: "en",
          sources: rootState.news.sources,
          from: rootState.filters.timeValue,
          sortBy: rootState.filters.sortByValue
        }
      });
      commit("SET_NEWS", response.data.articles);
    }
  }
};
