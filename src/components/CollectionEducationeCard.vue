<template>
  <div class="collection-item" v-if="getEducation.length">
    <!-- <router-link :to="{ name: 'Single', params: { id: product.id } }"> -->
    <router-link :to="{ name: 'Category', params: { id: 'education' } }">
      <div class="collection-images">
        <img :src="getEducation[0].largeImageURL" alt />
        <img :src="getEducation[1].largeImageURL" alt />
        <img :src="getEducation[2].largeImageURL" alt />
        <img :src="getEducation[3].largeImageURL" alt />
        <img :src="getEducation[4].largeImageURL" alt />
      </div>
      <div class="collection-title">
        <h5>Education</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CollectionEducationeCard",
  props: ["getEducation"],

  mounted() {}
};
</script>

<style>
</style>