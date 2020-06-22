
<template>
  <div class="collection-item" v-if="getFeeling.length">
    <router-link :to="{ name: 'Category', params: { id: 'feeling' } }">
      <div class="collection-images">
        <img :src="getFeeling[0].largeImageURL" alt />
        <img :src="getFeeling[1].largeImageURL" alt />
        <img :src="getFeeling[2].largeImageURL" alt />
        <img :src="getFeeling[3].largeImageURL" alt />
        <img :src="getFeeling[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5>Feeling</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CollectionFeelingCard",
  props: ["getFeeling"],

  mounted() {}
};
</script>

<style>
</style>