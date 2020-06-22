<template>
  <div class="collection-item" v-if="getReligion.length">
    <router-link :to="{ name: 'Category', params: { id: 'religion' } }">
      <div class="collection-images">
        <img :src="getReligion[0].largeImageURL" alt />
        <img :src="getReligion[1].largeImageURL" alt />
        <img :src="getReligion[2].largeImageURL" alt />
        <img :src="getReligion[3].largeImageURL" alt />
        <img :src="getReligion[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5 style="text-transform: capitalize;">religion</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["getReligion"],

  mounted() {}
};
</script>

<style>
</style>