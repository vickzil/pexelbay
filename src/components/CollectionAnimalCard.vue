<template>
  <div class="collection-item" v-if="getAnimal.length">
    <router-link :to="{ name: 'Category', params: { id: 'animal' } }">
      <div class="collection-images">
        <img :src="getAnimal[0].largeImageURL" alt />
        <img :src="getAnimal[1].largeImageURL" alt />
        <img :src="getAnimal[2].largeImageURL" alt />
        <img :src="getAnimal[3].largeImageURL" alt />
        <img :src="getAnimal[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">animal</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getAnimal"],

  mounted() {}
};
</script>

<style>
</style>