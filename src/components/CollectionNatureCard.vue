<template>
  <div class="collection-item" v-if="getNature.length">
    <!-- <router-link :to="{ name: 'Single', params: { id: product.id } }"> -->
    <router-link :to="{ name: 'Category', params: { id: 'nature' } }">
      <div class="collection-images">
        <img :src="getNature[0].largeImageURL" alt />
        <img :src="getNature[1].largeImageURL" alt />
        <img :src="getNature[2].largeImageURL" alt />
        <img :src="getNature[3].largeImageURL" alt />
        <img :src="getNature[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5>Nature</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CollectionNatureCard",
  props: ["getNature"],

  mounted() {}
};
</script>

<style>
</style>