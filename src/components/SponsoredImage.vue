<template>
  <div class="sponspored_images">
    <h6>Sponsored Images</h6>
    <div class="sponspored_image_boxes" v-if="images.length">
      <div class="sponspored_image" v-for="image in images" :key="image.id">
        <router-link :to="{ name: 'Single', params: { id: image.id } }">
          <img :data-src="image.largeImageURL" src="../assets/img/placeholder.png" class="lazy" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsoredImage",
  props: ["images"],
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.lazyLoad);
  },

  methods: {
    lazyLoad: function() {
      let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
      let active = false;
      if (active == false) {
        active = true;
        setTimeout(() => {
          lazyImages.forEach(lazyImage => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(image => {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                window.removeEventListener("scroll", this.lazyLoad);
              }
            }
          });
          active = false;
        }, 200);
      }
    }
  }
};
</script>

<style>
</style>