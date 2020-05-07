import axios from "axios";
export default {
  state: {
    title: "",
    publishedTime: "",
    newsDetails: ""
  },
  getters: {
    getNewsDetails: state => state.newsDetails
  },
  mutations: {
    SET_NEWS_DETAILS(state, details) {
      state.newsDetails = details;
    },
    SET_PARAMS(state, params) {
      state.title = params.newsTitle;
      state.publishedTime = params.date;
    }
  },
  actions: {
    async fetchNewsDetails({ state, commit }) {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          apiKey: process.env.VUE_APP_API_KEY,
          qInTitle: `"${state.title}"`,
          from: state.publishedTime,
          to: state.publishedTime
        }
      });
      commit("SET_NEWS_DETAILS", response.data.articles[0]);
    }
  }
};
