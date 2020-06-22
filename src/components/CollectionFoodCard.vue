<template>
  <div class="collection-item" v-if="getFood.length">
    <router-link :to="{ name: 'Category', params: { id: 'food' } }">
      <div class="collection-images">
        <img :src="getFood[0].largeImageURL" alt />
        <img :src="getFood[1].largeImageURL" alt />
        <img :src="getFood[2].largeImageURL" alt />
        <img :src="getFood[3].largeImageURL" alt />
        <img :src="getFood[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">food</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getFood"],

  mounted() {}
};
</script>

<style>
</style>