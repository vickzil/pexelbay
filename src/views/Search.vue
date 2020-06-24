/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="search" class="body_content">
          <div v-if="images.length">
            <div class="page_title">
              <h3>
                Search Result
                <span v-if="getSearchName">({{getSearchName}})</span>
              </h3>
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
      currentPage: 2,
      isBussy: false,
      maxPerpage: 30
    };
  },
  computed: {
    images() {
      return this.$store.getters.searchImages;
    },

    getSearchName() {
      return this.$store.state.searchName;
    },

    getSearchPageStatus() {
      return this.$store.state.searchPage;
    },
    searcTotalHits() {
      return this.$store.state.searcTotalHits;
    },
    APIKEY() {
      return this.$store.getters.APIKEY;
    },

    pageCount() {
      return Math.ceil(this.searcTotalHits / this.maxPerpage);
    },

    pageOffset() {
      return this.maxPerpage * this.currentPage;
    }
  },

  beforeMount() {
    if (this.getSearchPageStatus == false) {
      this.$router.push("/");
    }
  },

  beforeCreate() {
    if (this.getSearchPageStatus == false) {
      this.$router.push("/");
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
            this.currentPage += 1;
            this.fetchMoreImages();

            setTimeout(() => {}, 1500);
          }
        });
      });

      observer.observe(this.$refs.infinitescrolltrigger);
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
        this.checkResultTotalHits();
      }, 4000);
    },
    checkResultTotalHits: function() {
      if (this.images.length < this.searcTotalHits) {
        return this.scrollTrigger();
      }
    },
    fetchMoreImages: async function() {
      let imageUrl =
        "https://pixabay.com/api/?key=" +
        this.APIKEY +
        "&q=" +
        this.getSearchName +
        "&image_type=photo&per_page=" +
        this.maxPerpage +
        "&page=" +
        this.currentPage;
      let res = await fetch(imageUrl);
      let photos = await res.json();
      this.$store.dispatch("getMoreSearchPhotos", photos.hits);
      this.isBussy = false;
    },
    getSeatchPafeStatus: function() {
      if (this.getSearchPageStatus == true) {
        this.closePageLoading();
        this.closeNavigationMenu();
        this.closeInputSearch();
      }
    }
  },

  beforeRouteLeave(to, from, next) {
    this.showPageLoading();
    next();
  },

  mounted() {
    this.getSeatchPafeStatus();
  }
  // watch: {
  //   "$route.params.id": function(id) {
  //     id;
  //     this.scrollBehavior();
  //   }
  // }
};
</script>

<style scoped>
.scroll-trigger {
  height: 270px;
}
</style>
