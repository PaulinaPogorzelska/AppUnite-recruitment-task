<template>
  <div>
    <Title></Title>
    <Filters></Filters>
    <News></News>
    <ShowMore></ShowMore>
  </div>
</template>

<script>
import Filters from "@/components/home/Filters.vue";
import News from "@/components/home/News.vue";
import ShowMore from "@/components/home/ShowMore.vue";
import Title from "@/components/home/Title.vue";
export default {
  components: {
    Filters,
    News,
    ShowMore,
    Title
  }
};
</script>
