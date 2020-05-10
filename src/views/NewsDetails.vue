<template>
  <div class="groupDeatils">
    <Title></Title>
    <NewsDetails></NewsDetails>
  </div>
</template>

<script>
import NewsDetails from "@/components/newsDetails/NewsDetails.vue";
import Title from "@/components/newsDetails/Title.vue";
export default {
  components: {
    NewsDetails,
    Title
  }
};
</script>

<style scoped>
.groupDeatils {
  margin: 15px calc((100vw - 120px - (90vw - 120px)) / 2);
}
</style>
