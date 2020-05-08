<template>
  <button @click="showMore">Show more</button>
</template>

<script>
export default {
  methods: {
    showMore() {
      this.$store.commit("TURN_ON_SHOW_MORE");
      this.$store.dispatch("fetchNews");
    }
  }
};
</script>
