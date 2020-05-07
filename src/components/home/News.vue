<template>
  <div>
    <NewsItem
      v-for="(singleNews, key) in getNews"
      :key="key"
      :singleNews="singleNews"
    ></NewsItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewsItem from "./NewsItem.vue";
export default {
  computed: {
    ...mapGetters(["getNews"])
  },
  components: {
    NewsItem
  }
};
</script>
