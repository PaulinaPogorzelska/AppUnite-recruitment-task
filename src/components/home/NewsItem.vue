<template>
  <div>
    <img :src="singleNews.urlToImage" />
    <p>{{ date }}</p>
    <p>{{ singleNews.author }}</p>
    <a :href="singleNews.url">{{ singleNews.source.name }}</a>
    <p>{{ singleNews.title }}</p>
    <p>{{ singleNews.description }}</p>
    <button>Read More</button>
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
  }
};
</script>
