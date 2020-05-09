<template>
  <div>
    <multiselect
      placeholder="Pick action"
      :value="getTime"
      :options="getTimeOptions"
      :searchable="false"
      label="label"
      @input="UPDATE_TIME_VALUE"
      @close="updateNews"
    ></multiselect>
    <multiselect
      placeholder="Pick action"
      :value="getSortBy"
      :options="getSortByOptions"
      :searchable="false"
      label="label"
      @input="UPDATE_SORT_BY_VALUE"
      @close="updateNews"
    ></multiselect>
    <button @click="clearFilters">Clear Filters</button>
    <p>{{ getTime }}</p>
    <p>{{ getSortBy }}</p>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { Multiselect },
  created() {
    this.$store.commit("SET_CURRENT_DATES");
    this.$store.dispatch("fetchSources");
  },
  computed: {
    ...mapGetters([
      "getTime",
      "getSortBy",
      "getTimeOptions",
      "getSortByOptions"
    ])
  },
  methods: {
    ...mapMutations(["UPDATE_TIME_VALUE", "UPDATE_SORT_BY_VALUE"]),
    updateNews() {
      this.$store.commit("RESET_PAGE_NUMBER");
      this.$store.commit("TURUN_OFF_SHOW_MORE");
      this.$store.dispatch("fetchNews");
    },
    clearFilters() {
      this.$store.commit("CLEAR_FILTERS");
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
