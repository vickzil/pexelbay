<template>
  <div class="collection-item" v-if="getIndustry.length">
    <router-link :to="{ name: 'Category', params: { id: 'industry' } }">
      <div class="collection-images">
        <img :src="getIndustry[0].largeImageURL" alt />
        <img :src="getIndustry[1].largeImageURL" alt />
        <img :src="getIndustry[2].largeImageURL" alt />
        <img :src="getIndustry[3].largeImageURL" alt />
        <img :src="getIndustry[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">industry</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getIndustry"],

  mounted() {}
};
</script>

<style>
</style>