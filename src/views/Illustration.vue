/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="search" class="body_content" v-if="images">
          <div class="page_title">
            <h3>Illustration</h3>
          </div>
          <div class="image_container">
            <ImageCard v-for="image in images" :key="image.id" :image="image" />
          </div>
        </div>
        <NoResult v-else />
      </div>
    </div>
  </div>
</template>

<script>
import ImageCard from "../components/ImageCard";
import NoResult from "../components/NoResult";
export default {
  name: "Illustration",
  components: {
    ImageCard,
    NoResult
  },
  computed: {
    images() {
      return this.$store.getters.getIllustrations;
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

    getIllustration: function() {
      if (this.$store.state.illustrations.length > 0) {
        this.closePageLoading();
      } else {
        this.$store.dispatch("getIllustration");
      }
    }
  },

  beforeRouteLeave(to, from, next) {
    this.showPageLoading();
    next();
  },

  mounted() {
    this.getIllustration();
    this.closeNavigationMenu();
    this.closeInputSearch();
  }
};
</script>

<style scoped></style>
