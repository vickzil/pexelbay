<template>
  <div class="collection-item" v-if="getTravel.length">
    <router-link :to="{ name: 'Category', params: { id: 'travel' } }">
      <div class="collection-images">
        <img :src="getTravel[0].largeImageURL" alt />
        <img :src="getTravel[1].largeImageURL" alt />
        <img :src="getTravel[2].largeImageURL" alt />
        <img :src="getTravel[3].largeImageURL" alt />
        <img :src="getTravel[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">travel</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getTravel"],

  mounted() {}
};
</script>

<style>
</style>