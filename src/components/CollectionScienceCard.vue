<template>
  <div class="collection-item" v-if="getScience.length">
    <!-- <router-link :to="{ name: 'Single', params: { id: product.id } }"> -->
    <router-link :to="{ name: 'Category', params: { id: 'science' } }">
      <div class="collection-images">
        <img :src="getScience[0].largeImageURL" alt />
        <img :src="getScience[1].largeImageURL" alt />
        <img :src="getScience[2].largeImageURL" alt />
        <img :src="getScience[3].largeImageURL" alt />
        <img :src="getScience[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5>Science</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CollectionNatureCard",
  props: ["getScience"],

  mounted() {}
};
</script>

<style>
</style>