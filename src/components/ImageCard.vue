<template>
  <div class="image_overy">
    <router-link :to="{ name: 'Single', params: { id: image.id } }">
      <img :src="image.largeImageURL" alt />
      <div class="author_div">
        <a :href="image.pageURL" target="_blank">{{image.user}}</a>
        <i
          class="fa fa-heart"
          :class="(likedPhoto) ? 'likeActive': '' "
          @click="togglePhotoLike($event)"
        ></i>
      </div>
    </router-link>
    <!-- //src="../assets/img/placeholder.png"  class="lazy"-->
  </div>
</template>


<script>
export default {
  name: "ImageCard",
  props: ["image"],
  data() {
    return {
      likedPhoto: false
    };
  },
  mounted() {
    // window.scrollTo(0, 0);
    // window.addEventListener("scroll", this.lazyLoad);
  },

  methods: {
    togglePhotoLike: function(event) {
      event.preventDefault();
      this.likedPhoto = !this.likedPhoto;
    }
    // lazyLoad: function() {
    //   let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    //   let active = false;
    //   if (active == false) {
    //     active = true;
    //     setTimeout(() => {
    //       lazyImages.forEach(lazyImage => {
    //         if (
    //           lazyImage.getBoundingClientRect().top <= window.innerHeight &&
    //           lazyImage.getBoundingClientRect().bottom >= 0 &&
    //           getComputedStyle(lazyImage).display !== "none"
    //         ) {
    //           lazyImage.src = lazyImage.dataset.src;
    //           lazyImage.classList.remove("lazy");

    //           lazyImages = lazyImages.filter(image => {
    //             return image !== lazyImage;
    //           });

    //           if (lazyImages.length === 0) {
    //             window.removeEventListener("scroll", this.lazyLoad);
    //           }
    //         }
    //       });
    //       active = false;
    //     }, 200);
    //   }
    // }
  }
};
</script>

<style>
</style>