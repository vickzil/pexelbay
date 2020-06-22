<template>
  <div class="collection-item" v-if="getMusic.length">
    <router-link :to="{ name: 'Category', params: { id: 'music' } }">
      <div class="collection-images">
        <img :src="getMusic[0].largeImageURL" alt />
        <img :src="getMusic[1].largeImageURL" alt />
        <img :src="getMusic[2].largeImageURL" alt />
        <img :src="getMusic[3].largeImageURL" alt />
        <img :src="getMusic[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">Music</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getMusic"],

  mounted() {}
};
</script>

<style>
</style>