

<template>
  <div class="collection-item" v-if="getHealth.length">
    <router-link :to="{ name: 'Category', params: { id: 'health' } }">
      <div class="collection-images">
        <img :src="getHealth[0].largeImageURL" alt />
        <img :src="getHealth[1].largeImageURL" alt />
        <img :src="getHealth[2].largeImageURL" alt />
        <img :src="getHealth[3].largeImageURL" alt />
        <img :src="getHealth[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">health</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CollectionHealthCard",
  props: ["getHealth"],

  mounted() {}
};
</script>

<style>
</style>