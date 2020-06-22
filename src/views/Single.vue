/* eslint-disable */
<template>
  <div class="section">
    <div class="container-fluid">
      <div class="single_page" v-if="image">
        <div class="single_page_grid">
          <div class="single_page_left_side">
            <div class="single_image">
              <img v-if="image.largeImageURL" :src="image.largeImageURL" alt />
            </div>
            <SponsoredImage :images="images" />
            <RelatedTags />
          </div>
          <div class="single_page_right_side">
            <div class="single_author_div">
              <img v-if="image.userImageURL" :src="image.userImageURL" alt />
              <img v-else src="../assets/img/person.jpg" alt />
              <h6>{{image.user}}</h6>
              <a :href="image.pageURL" class="small_btn mr-2">Coffee</a>
              <a :href="image.pageURL" class="small_btn">follow</a>
            </div>
            <div class="btn-group text-center" role="group" aria-label="Button group">
              <button class="small_btn" @click="toggleLike(image.likes)">
                <i class="fa fa-thumbs-up mr-1"></i>
                {{liked}}
              </button>
              <button class="small_btn" @click="toggleFavourite">
                <i class="fa fa-star mr-1"></i>
                {{favourites}}
              </button>
            </div>
            <Developer />
            <a
              :data-href="image.largeImageURL"
              @click="forceDownload(image)"
              download="image.type"
              class="download_image_btn"
            >
              <i class="fa fa-download mr-2"></i> Download
            </a>
            <Licience />
            <RelatedImages :relatedImage="relatedImage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RelatedImages from "../components/RelatedImages";
import SponsoredImage from "../components/SponsoredImage";
import RelatedTags from "../components/RelatedTags";
import Licience from "../components/Licience";
import Developer from "../components/Developer";

export default {
  name: "Single",
  components: {
    RelatedImages,
    SponsoredImage,
    RelatedTags,
    Licience,
    Developer
  },
  data() {
    return {
      like: false,
      liked: 0,
      favourite: false,
      favourites: 0
    };
  },
  props: ["id"],
  computed: {
    pageLoading() {
      return this.$store.getters.pageLoading;
    },
    APIKEY() {
      return this.$store.getters.APIKEY;
    },
    image() {
      let images = "";
      let data = this.$store.getters.getSingleImage;
      if (Array.isArray(data)) {
        images = data[0];
      } else {
        images = data;
      }
      return images;
    },

    images() {
      return this.$store.getters.sponsoredImage;
    },
    generateWords() {
      return this.$store.getters.generateWords;
    },
    generateSponsporedWords() {
      return this.$store.getters.generateSponsporedWords;
    },
    relatedImage() {
      let allImage = this.$store.state.randomImages;
      let relatedImage = allImage.slice(0, 6);
      return relatedImage;
    }
  },
  methods: {
    toggleLike: function() {
      this.like = !this.like;
      if (this.like == true) {
        this.liked = this.liked + 1;
      } else {
        this.liked = this.liked - 1;
      }
    },
    toggleFavourite: function() {
      this.favourite = !this.favourite;
      if (this.favourite == true) {
        this.favourites = this.favourites + 1;
      } else {
        this.favourites = this.favourites - 1;
      }
    },
    closeNavigationMenu: function() {
      this.$store.dispatch("closeNavigationMenu");
    },
    closeInputSearch: function() {
      this.$store.dispatch("closeInputSearch");
    },
    showPageLoading: function() {
      this.$store.dispatch("showPageLoading");
    },
    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 4000);
    },
    getImageById: function() {
      this.$store.dispatch("getImageById", this.id);
      this.getRelatedImages();
    },
    getSponsporedImages: function() {
      this.$store.dispatch("getSponsoredImages");
    },

    updateImageLiked() {
      setTimeout(() => {
        let newImage = this.image.likes;
        this.liked = newImage;
      }, 2000);
    },

    updateImageFavourite() {
      setTimeout(() => {
        let newImage = this.image.favorites;
        this.favourites = newImage;
      }, 2000);
    },

    forceDownload: function(image) {
      var downloadUrl = image.largeImageURL;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", downloadUrl, true);
      xhr.responseType = "blob";
      xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement("a");
        tag.href = imageUrl;
        tag.download = image.type;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
      };
      xhr.send();
      console.log(image);
    },

    getRelatedImages: function() {
      setTimeout(() => {
        if (this.image.tags) {
          let totalTags = this.image.tags;
          let firstWord = totalTags.replace(/ .*/, "");
          this.$store.dispatch("getRelatedImages", firstWord);
        }
      }, 1500);
    }
  },
  mounted() {
    this.getImageById();
    this.getSponsporedImages();
    this.closeNavigationMenu();
    this.closeInputSearch();
    this.updateImageLiked();
    this.updateImageFavourite();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    this.showPageLoading();
    this.getImageById();
    (this.like = false), (this.favourite = false), next();
  },
  watch: {
    "$route.params.id": function() {
      this.showPageLoading();
      this.getImageById();
      this.getSponsporedImages();
      this.getRelatedImages();
    }
  }
};
</script>
<style scoped>
.download_image_btn {
  cursor: pointer;
}
</style>
