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
    async fetchNews({ state, commit }) {
      console.log(state.sources);
      const response = await axios.get("http://newsapi.org/v2/everything", {
        params: {
          apiKey: process.env.VUE_APP_API_KEY,
          sortBy: "publishedAt",
          language: "en",
          sources: state.sources
        }
      });
      commit("SET_NEWS", response.data.articles);
    }
  }
};
