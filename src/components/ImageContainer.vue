<template>
  <div class="image_container">
    <ImageCard v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
import ImageCard from "./ImageCard";
export default {
  name: "ImageContainer",
  components: {
    ImageCard
  },
  props: ["images"]
};
</script>

<style>
</style>