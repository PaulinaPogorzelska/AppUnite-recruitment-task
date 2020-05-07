export default {
  state: {
    timeValue: "",
    sortByValue: "",
    timeOptions: [
      { label: "Today" },
      { label: "This week" },
      { label: "This month" }
    ],
    sortByOptions: [
      { label: "Popularity", value: "popularity" },
      { label: "Publication date", value: "publishedAt" }
    ]
  },
  getters: {
    getTimeValue: state => state.timeValue,
    getSortByValue: state => state.sortByValue,
    getTimeOptions: state => state.timeOptions,
    getSortByOptions: state => state.sortByOptions
  },
  mutations: {
    SET_CURRENT_DATES(state) {
      let date = new Date();
      const today = date.toISOString().slice(0, 10);
      state.timeOptions[0].value = today;

      const day = date.getDay();
      const mondayDate = date.getDate() - day + (day == 0 ? -6 : 1);
      date.setDate(mondayDate);
      const thisWeek = date.toISOString().slice(0, 10);
      state.timeOptions[1].value = thisWeek;

      date = new Date(); //set again because date has been modified
      date.setDate(1);
      const thisMonth = date.toISOString().slice(0, 10);
      state.timeOptions[2].value = thisMonth;
    },
    UPDATE_TIME_VALUE(state, value) {
      state.timeValue = value;
    },
    UPDATE_SORT_BY_VALUE(state, value) {
      state.sortByValue = value;
    }
  }
};
