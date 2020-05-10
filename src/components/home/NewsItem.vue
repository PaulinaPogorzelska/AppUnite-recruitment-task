<template>
  <div class="newsItem">
    <div class="wrapImage"><img :src="setImage" /></div>
    <div class="infoLine">
      <p>{{ date }}</p>
      <p>{{ singleNews.author }}</p>
      <a :href="singleNews.url" target="_blank">{{ singleNews.source.name }}</a>
    </div>
    <h2>{{ singleNews.title }}</h2>
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
    },
    setImage() {
      if (this.singleNews.urlToImage && this.singleNews.urlToImage != "null") {
        return this.singleNews.urlToImage;
      } else {
        return require("../../assets/placeholder 16x9.png");
      }
    }
  },
  methods: {
    loadDetailsPage() {
      const endPoint = this.singleNews.title.replace(/ /g, "-");
      this.$router.push(
        "/news/" + endPoint + "/" + this.singleNews.publishedAt
      );
    }
  }
};
</script>

<style>
.newsItem {
  position: relative;
}

.newsItem img {
  width: 100%;
}

.infoLine * {
  display: inline-block;
  margin: 10px 10px 5px 0;
  font-size: 14px;
}

.infoLine p {
  color: #606060;
}

.infoLine a {
  text-decoration: none;
  color: #493be1;
}

.newsItem h2 {
  font-size: 24px;
  margin: 5px 10px 10px 0;
}

.newsItem > p {
  font-size: 17px;
  color: #465252;
  line-height: 19px;
  margin-bottom: 60px;
}

.newsItem button {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #493be1;
  border: 1px solid #493be1;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
}
</style>
