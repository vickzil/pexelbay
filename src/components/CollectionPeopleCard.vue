

<template>
  <div class="collection-item" v-if="getPeople.length">
    <router-link :to="{ name: 'Category', params: { id: 'people' } }">
      <div class="collection-images">
        <img :src="getPeople[0].largeImageURL" alt />
        <img :src="getPeople[1].largeImageURL" alt />
        <img :src="getPeople[2].largeImageURL" alt />
        <img :src="getPeople[3].largeImageURL" alt />
        <img :src="getPeople[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">people</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getPeople"],

  mounted() {}
};
</script>

<style>
</style>