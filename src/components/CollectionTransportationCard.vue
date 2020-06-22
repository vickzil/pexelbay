<template>
  <div class="collection-item" v-if="getTransportation.length">
    <router-link :to="{ name: 'Category', params: { id: 'transportation' } }">
      <div class="collection-images">
        <img :src="getTransportation[0].largeImageURL" alt />
        <img :src="getTransportation[1].largeImageURL" alt />
        <img :src="getTransportation[2].largeImageURL" alt />
        <img :src="getTransportation[3].largeImageURL" alt />
        <img :src="getTransportation[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">Transportation</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getTransportation"],

  mounted() {}
};
</script>

<style>
</style>