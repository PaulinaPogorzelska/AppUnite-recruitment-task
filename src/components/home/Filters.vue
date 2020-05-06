<template>
  <div>
    <multiselect
      v-model="timeValue"
      :options="timeOptions"
      label="label"
    ></multiselect>
    <multiselect v-model="sortByValue" :options="sortByOptions"></multiselect>
    <p>{{ timeValue }}</p>
    <p>{{ sortByValue }}</p>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      timeValue: "",
      sortByValue: "",
      timeOptions: [
        { label: "Today" },
        { label: "This week" },
        { label: "This month" }
      ],
      sortByOptions: ["Popularity", "Publication date"]
    };
  },
  created() {
    let date = new Date();
    const today = date.toISOString().slice(0, 10);
    this.timeOptions[0].value = today;

    const day = date.getDay();
    const mondayDate = date.getDate() - day + (day == 0 ? -6 : 1);
    date.setDate(mondayDate);
    const thisWeek = date.toISOString().slice(0, 10);
    this.timeOptions[1].value = thisWeek;

    date = new Date(); //set again because date has been modified
    date.setDate(1);
    const thisMonth = date.toISOString().slice(0, 10);
    this.timeOptions[2].value = thisMonth;
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
