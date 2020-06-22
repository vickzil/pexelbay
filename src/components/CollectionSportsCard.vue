<template>
  <div class="collection-item" v-if="getSports.length">
    <router-link :to="{ name: 'Category', params: { id: 'sports' } }">
      <div class="collection-images">
        <img :src="getSports[0].largeImageURL" alt />
        <img :src="getSports[1].largeImageURL" alt />
        <img :src="getSports[2].largeImageURL" alt />
        <img :src="getSports[3].largeImageURL" alt />
        <img :src="getSports[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">sports</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getSports"],

  mounted() {}
};
</script>

<style>
</style>