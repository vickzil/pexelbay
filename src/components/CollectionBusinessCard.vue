<template>
  <div class="collection-item" v-if="getBusiness.length">
    <router-link :to="{ name: 'Category', params: { id: 'business' } }">
      <div class="collection-images">
        <img :src="getBusiness[0].largeImageURL" alt />
        <img :src="getBusiness[1].largeImageURL" alt />
        <img :src="getBusiness[2].largeImageURL" alt />
        <img :src="getBusiness[3].largeImageURL" alt />
        <img :src="getBusiness[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">Business</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getBusiness"],

  mounted() {}
};
</script>

<style>
</style>