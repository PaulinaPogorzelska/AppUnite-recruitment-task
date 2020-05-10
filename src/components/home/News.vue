<template>
  <div class="newsList">
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

<style scoped>
.newsList {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 5%;
  row-gap: 30px;
}

@media (max-width: 768px) {
  .newsList {
    grid-template-columns: 45% 45%;
  }
}
</style>
