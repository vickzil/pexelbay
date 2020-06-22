<template>
  <div class="collection-item" v-if="getBuilding.length">
    <router-link :to="{ name: 'Category', params: { id: 'building' } }">
      <div class="collection-images">
        <img :src="getBuilding[0].largeImageURL" alt />
        <img :src="getBuilding[1].largeImageURL" alt />
        <img :src="getBuilding[2].largeImageURL" alt />
        <img :src="getBuilding[3].largeImageURL" alt />
        <img :src="getBuilding[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">building</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getBuilding"],

  mounted() {}
};
</script>

<style>
</style>