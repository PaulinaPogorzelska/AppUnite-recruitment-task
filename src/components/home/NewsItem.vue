<template>
  <div>
    <img :src="singleNews.urlToImage" />
    <p>{{ date }}</p>
    <p>{{ singleNews.author }}</p>
    <a :href="singleNews.url" target="_blank">{{ singleNews.source.name }}</a>
    <p>{{ singleNews.title }}</p>
    <p>{{ singleNews.description }}</p>
    <button @click="loadDetailsPage">Read More</button>
  </div>
</template>

<script>
export default {
  props: ["singleNews"],
  computed: {
    date() {
      const date = new Date(this.singleNews.publishedAt).toString();
      return date.slice(4, 10) + "," + date.slice(10, 15);
    }
  },
  methods: {
    loadDetailsPage() {
      const endPoint = this.singleNews.title.replace(/ /g, "-");
      this.$router.push("/news/" + endPoint);
    }
  }
};
</script>
