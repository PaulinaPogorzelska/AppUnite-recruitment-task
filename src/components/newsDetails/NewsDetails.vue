<template>
  <div>
    <p>{{ this.$route.params }}</p>
    <p>Checkme</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_PARAMS", this.$route.params);
    this.$store.dispatch("fetchNewsDetails");
  }
};
</script>
