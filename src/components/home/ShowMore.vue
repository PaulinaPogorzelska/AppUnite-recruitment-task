<template>
  <div class="wrapShowMore">
    <button @click="showMore" :disabled="isDisabled()" class="showMore">
      Show more
    </button>
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

<style scoped>
.wrapShowMore {
  display: flex;
  justify-content: center;
}
.showMore {
  margin-top: 70px;
  width: 28%;
  padding: 13px;
  background-color: white;
  font-size: 16px;
  color: #493be1;
  border: 1px solid #493be1;
}
</style>
