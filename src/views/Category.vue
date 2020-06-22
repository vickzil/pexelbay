<template>
  <div class="section">
    <div class="container-fluid">
      <div id="search" class="body_content" v-if="images">
        <div class="page_title">
          <h3 style="text-transform: capitalize!important;">{{id}}</h3>
        </div>
        <div class="image_container">
          <ImageCard v-for="image in images" :key="image.id" :image="image" />
        </div>
        <div ref="infinitescrolltrigger" class="scroll-trigger">
          <span
            class="spinner-grow spinner-grow-md"
            role="status"
            v-if="isBussy"
            aria-hidden="true"
          ></span>
        </div>
      </div>
      <NoResult v-else />
    </div>
  </div>
</template>

<script>
import ImageCard from "../components/ImageCard";
import NoResult from "../components/NoResult";

export default {
  name: "Photos",
  components: {
    ImageCard,
    NoResult
  },
  data() {
    return {
      currentPage: 1,
      isBussy: false,
      maxPerpage: 43,
      totalResult: 300
    };
  },
  props: ["id"],
  computed: {
    images() {
      return this.$store.state.categoryImage;
    },

    APIKEY() {
      return this.$store.getters.APIKEY;
    },

    pageCount() {
      return Math.ceil(this.totalResult / this.maxPerpage);
    },

    pageOffset() {
      return this.maxPerpage * this.currentPage;
    }
  },

  methods: {
    scrollTrigger: function() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (
            entry.intersectionRatio > 0 &&
            this.currentPage < this.pageCount
          ) {
            this.isBussy = true;

            setTimeout(() => {
              this.currentPage += 1;
              this.fetchMoreImages();
            }, 1500);
          }
        });
      });

      observer.observe(this.$refs.infinitescrolltrigger);
    },

    fetchMoreImages() {
      let imageUrl =
        "https://pixabay.com/api/?key=" +
        this.APIKEY +
        "&image_type=photo&per_page=" +
        this.maxPerpage +
        "&page=" +
        this.currentPage;

      fetch(imageUrl)
        .then(res => res.json())
        .then(res => {
          res.hits.map(photos => {
            this.$store.state.categoryImage.push(photos);
          });
          this.isBussy = false;
        })
        .catch(err => console.log(err));
    },
    getCategoryImage() {
      this.$store.dispatch("getCategoryImage", this.id);
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
    getPhotos: function() {
      this.$store.dispatch("getPhotos");
    },
    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 5000);
    }
  },
  mounted() {
    this.getCategoryImage();
    this.scrollTrigger();
  },

  beforeRouteLeave(to, from, next) {
    this.showPageLoading();
    next();
  }
};
</script>

<style></style>
