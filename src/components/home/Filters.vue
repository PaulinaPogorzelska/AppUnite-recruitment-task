<template>
  <div>
    <multiselect
      placeholder="Pick action"
      :value="getTimeValue"
      :options="getTimeOptions"
      :searchable="false"
      label="label"
      @input="UPDATE_TIME_VALUE"
    ></multiselect>
    <multiselect
      placeholder="Pick action"
      :value="getSortByValue"
      :options="getSortByOptions"
      :searchable="false"
      label="label"
      @input="UPDATE_SORT_BY_VALUE"
    ></multiselect>
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
      "getTimeValue",
      "getSortByValue",
      "getTimeOptions",
      "getSortByOptions"
    ])
  },
  methods: {
    ...mapMutations(["UPDATE_TIME_VALUE", "UPDATE_SORT_BY_VALUE"])
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
