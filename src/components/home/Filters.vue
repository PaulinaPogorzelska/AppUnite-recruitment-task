<template>
  <div class="wrapAllSelect">
    <div class="wrapSelect">
      <multiselect
        placeholder="Time"
        :value="getTime"
        :options="getTimeOptions"
        :searchable="false"
        selectedLabel=""
        selectLabel=""
        deselectLabel=""
        label="label"
        @input="UPDATE_TIME_VALUE"
        @close="updateNews"
        class="multiselect"
      ></multiselect>
    </div>
    <div class="wrapSelect">
      <multiselect
        placeholder="Sort By"
        :value="getSortBy"
        :options="getSortByOptions"
        :searchable="false"
        selectedLabel=""
        selectLabel=""
        deselectLabel=""
        label="label"
        @input="UPDATE_SORT_BY_VALUE"
        @close="updateNews"
        class="multiselect"
      ></multiselect>
    </div>
    <button @click="clearFilters" class="clearFilters">Clear Filters</button>
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
<style>
.wrapAllSelect {
  width: 100%;
  display: flex;
  position: relative;
}
.wrapSelect {
  width: 14%;
  min-width: 130px;
  margin: 10px 30px 40px 0;
}

.multiselect__tags {
  padding: 0;
  border: 0;
  min-height: 27px;
  border-radius: 0;
  border-bottom: 1px solid #dcdcdc;
}

.multiselect__placeholder {
  margin: 0;
  padding: 0;
  line-height: 17px;
  margin: 5px 5px 5px 0;
  color: black;
}

.multiselect__select {
  height: 27px;
}

.multiselect__content-wrapper {
  border-radius: 0;
}

.multiselect__content {
  font-size: 14px;
}

.multiselect__single {
  font-size: 14px;
  width: calc(100% - 27px);
}
.multiselect__option--highlight {
  background: transparent;
  color: #493be1;
}
.multiselect__option--highlight:after {
  background: transparent;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: transparent;
  color: grey;
  font-weight: 500;
}

.multiselect__option--selected.multiselect__option--highlight:after {
  background: transparent;
}

.multiselect__option--selected {
  background-color: rgba(73, 59, 225, 0.9);
  color: white;
  font-weight: 500;
}

.clearFilters {
  position: absolute;
  right: 0;
  padding: 6px 30px;
  background-color: white;
  font-size: 16px;
  color: #493be1;
  border: 1px solid #493be1;
}
</style>
