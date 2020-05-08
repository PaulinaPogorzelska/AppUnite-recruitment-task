<template>
  <div>
    <button @click="showMore" :disabled="isDisabled()">Show more</button>
    <p>
      {{ getCurrentPage }} ,
      {{ this.getCurrentPage > 100 / this.getPageSize }} ,
      {{ getPageSize }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPageSize", "getCurrentPage", "getResultsNumber"])
  },
  methods: {
    showMore() {
      this.$store.commit("TURN_ON_SHOW_MORE");
      this.$store.commit("INCREMENT_PAGE_NUMBER");
      this.$store.dispatch("fetchNews");
    },
    isDisabled() {
      return (
        this.getCurrentPage >= this.getResultsNumber / this.getPageSize ||
        this.getCurrentPage >= Math.floor(100 / this.getPageSize)
        //the second line is based on api restrictions for free version, if you have the full version remove it
      );
    }
  }
};
</script>
