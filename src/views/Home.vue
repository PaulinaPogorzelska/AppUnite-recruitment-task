<template>
  <div>
    <Filters></Filters>
    <News></News>
  </div>
</template>

<script>
import Filters from "@/components/home/Filters.vue";
import News from "@/components/home/News.vue";
export default {
  components: {
    Filters,
    News
  }
};
</script>
