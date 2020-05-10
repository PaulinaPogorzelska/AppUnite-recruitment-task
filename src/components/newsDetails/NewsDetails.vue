<template>
  <div class="newsDetails">
    <p @click="$router.push('/')" class="returnToHome">
      Return to articles list
    </p>
    <div class="imgWraper"><img :src="setImage" /></div>
    <div class="info">
      <div class="infoLine">
        <p>{{ date }}</p>
        <p>{{ getNewsDetails.author }}</p>
        <a :href="getNewsDetails.url">{{ source }}</a>
      </div>
      <h2>{{ getNewsDetails.title }}</h2>
      <p>{{ getNewsDetails.description }}</p>
      <form :action="getNewsDetails.url" target="_blank">
        <button>Go To Source</button>
      </form>
    </div>
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
    },
    setImage() {
      if (
        this.getNewsDetails.urlToImage &&
        this.getNewsDetails.urlToImage != "null"
      ) {
        return this.getNewsDetails.urlToImage;
      } else {
        return require("../../assets/placeholder 5x2.png");
      }
    }
  }
};
</script>

<style scoped>
.imgWraper {
  width: calc(90vw - 120px);
  height: calc((90vw -120px) / 5 * 2);
  overflow: hidden;
}
.imgWraper img {
  width: 100%;
}

.returnToHome {
  color: #493be1;
  margin: 10px 0;
  cursor: pointer;
}

.info {
  margin: 10px 25%;
}
.info h2 {
  font-size: 24px;
  margin: 25px 0 10px 0;
}

.info p {
  font-size: 17px;
  color: #465252;
  line-height: 19px;
}

.info button {
  background: #493be1;
  display: block;
  margin: 20px 0;
  border: 1px solid #493be1;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  width: 30%;
  height: 45px;
}
</style>
