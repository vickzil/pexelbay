<template>
  <div class="collection-item" v-if="getFashion.length">
    <!-- <router-link :to="{ name: 'Single', params: { id: product.id } }"> -->
    <router-link :to="{ name: 'Category', params: { id: 'fashion' } }">
      <div class="collection-images">
        <img :src="getFashion[0].largeImageURL" alt />
        <img :src="getFashion[1].largeImageURL" alt />
        <img :src="getFashion[2].largeImageURL" alt />
        <img :src="getFashion[3].largeImageURL" alt />
        <img :src="getFashion[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5>Fashion</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FashionCollectionCard",
  props: ["getFashion"],

  mounted() {}
};
</script>

<style>
</style>