

<template>
  <div class="collection-item" v-if="getPlaces.length">
    <router-link :to="{ name: 'Category', params: { id: 'places' } }">
      <div class="collection-images">
        <img :src="getPlaces[0].largeImageURL" alt />
        <img :src="getPlaces[1].largeImageURL" alt />
        <img :src="getPlaces[2].largeImageURL" alt />
        <img :src="getPlaces[3].largeImageURL" alt />
        <img :src="getPlaces[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">places</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getPlaces"],

  mounted() {}
};
</script>

<style>
</style>