/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="search" class="body_content">
          <div class="page_title">
            <h3>Photos</h3>
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
        <!-- <NoResult v-else /> -->
      </div>
    </div>
  </div>
</template>


<script>
import ImageCard from "../components/ImageCard";
// import NoResult from "../components/NoResult";

export default {
  name: "Photos",
  components: {
    ImageCard
    // NoResult
  },
  data() {
    return {
      currentPage: 2,
      isBussy: false,
      maxPerpage: 30,
      totalResult: 300
    };
  },
  computed: {
    images() {
      return this.$store.state.photos;
    },

    photoCurrentPage: {
      get() {
        return this.$store.state.photoCurrentPage;
      },
      set(value) {
        return (this.$store.state.photoCurrentPage = value);
      }
    },
    photoTotalHits() {
      return this.$store.state.photoTotalHits;
    },

    pageLoading() {
      return this.$store.getters.pageLoading;
    },

    APIKEY() {
      return this.$store.getters.APIKEY;
    },

    pageCount() {
      return Math.ceil(this.photoTotalHits / this.maxPerpage);
    },

    pageOffset() {
      return this.maxPerpage * this.photoCurrentPage;
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
            this.photoCurrentPage += 1;
            this.fetchMoreImages();

            setTimeout(() => {}, 1500);
          }
        });
      });

      observer.observe(this.$refs.infinitescrolltrigger);
    },

    closeNavigationMenu: function() {
      this.$store.dispatch("closeNavigationMenu");
      setTimeout(() => {
        this.checkResultTotalHits();
      }, 3000);
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

    getPhotos: function() {
      if (this.$store.state.photos.length > 0) {
        this.closePageLoading();
      } else {
        this.$store.dispatch("getPhotos");
      }
    },

    checkResultTotalHits: function() {
      if (this.images.length < this.photoTotalHits) {
        return this.scrollTrigger();
      }
    },

    fetchMoreImages: async function() {
      let imageUrl =
        "https://pixabay.com/api/?key=" +
        this.APIKEY +
        "&image_type=photo&per_page=" +
        this.maxPerpage +
        "&page=" +
        this.photoCurrentPage;
      let res = await fetch(imageUrl);
      let photos = await res.json();
      this.$store.state.photoTotalHits = photos.totalHits;
      this.$store.dispatch("getMorePhotos", photos.hits);

      this.isBussy = false;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.showPageLoading();
    next();
  },
  mounted() {
    this.closeNavigationMenu();
    this.closeInputSearch();
    this.getPhotos();
  }
};
</script>

<style scoped>
.scroll-trigger {
  height: 100px;
}
</style>
