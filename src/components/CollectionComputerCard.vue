<template>
  <div class="collection-item" v-if="getComputer.length">
    <router-link :to="{ name: 'Category', params: { id: 'computer' } }">
      <div class="collection-images">
        <img :src="getComputer[0].largeImageURL" alt />
        <img :src="getComputer[1].largeImageURL" alt />
        <img :src="getComputer[2].largeImageURL" alt />
        <img :src="getComputer[3].largeImageURL" alt />
        <img :src="getComputer[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">computer</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getComputer"],

  mounted() {}
};
</script>

<style>
</style>