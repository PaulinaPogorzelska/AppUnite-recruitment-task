<template>
  <div>
    <p @click="$router.push('/')">Return to articles list</p>
    <p>{{ this.$route.params }}</p>
    <img :src="getNewsDetails.urlToImage" />
    <p>{{ date }}</p>
    <p>{{ getNewsDetails.author }}</p>
    <a :href="getNewsDetails.url">{{ source }}</a>
    <p>{{ getNewsDetails.title }}</p>
    <p>{{ getNewsDetails.description }}</p>
    <form :action="getNewsDetails.url" target="_blank">
      <button>Go To Source</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.commit("SET_PARAMS", this.$route.params);
    this.$store.dispatch("fetchNewsDetails");
  },
  computed: {
    ...mapGetters(["getNewsDetails"]),
    date() {
      const date = new Date(this.getNewsDetails.publishedAt).toString();
      return date.slice(4, 10) + "," + date.slice(10, 15);
    },
    source() {
      if (this.getNewsDetails.source) {
        return this.getNewsDetails.source.name;
      } else {
        return "";
      }
    }
  }
};
</script>
