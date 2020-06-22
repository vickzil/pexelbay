/* eslint-disable */
<template>
  <div>
    <HomeBanner />
    <HomeTab />
    <div class="section">
      <div class="container-fluid">
        <div id="home" class="body_content" v-if="images">
          <ImageContainer :images="images" />
          <div class="discover_div">
            <router-link to="/explore" class="buttn">Discover more</router-link>
          </div>
        </div>
        <NoResult v-else />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from "../components/HomeBanner";
import HomeTab from "../components/HomeTab";
import ImageContainer from "../components/ImageContainer";
import NoResult from "../components/NoResult";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeTab,
    ImageContainer,
    NoResult
  },

  computed: {
    images() {
      return this.$store.getters.getRandomImages;
    },

    pageLoading() {
      return this.$store.getters.pageLoading;
    },

    APIKEY() {
      return this.$store.getters.APIKEY;
    }
  },

  methods: {
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

    getImages: function() {
      if (this.$store.state.randomImage.length > 0) {
        this.closePageLoading();
      } else {
        this.$store.dispatch("getImages");
      }
    }
  },

  beforeRouteLeave(to, from, next) {
    this.showPageLoading();
    next();
  },

  mounted() {
    this.getImages();
    this.closeNavigationMenu();
    this.closeInputSearch();
  }
};
</script>

<style scoped></style>
