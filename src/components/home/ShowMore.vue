<template>
  <button @click="showMore">Show more</button>
</template>

<script>
export default {
  methods: {
    showMore() {
      this.$store.commit("TURN_ON_SHOW_MORE");
      this.$store.commit("INCREMENT_PAGE_NUMBER");
      this.$store.dispatch("fetchNews");
    }
  }
};
</script>
