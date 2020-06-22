/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="search" class="body_content" v-if="images">
          <div class="page_title">
            <h3>Vector</h3>
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
  name: "Vector",
  components: {
    ImageCard,
    NoResult
  },
  computed: {
    // GET IMAGES
    images() {
      return this.$store.getters.getVector;
    }
  },

  methods: {
    // CLOSE NAVIAGTION MENU
    closeNavigationMenu: function() {
      this.$store.dispatch("closeNavigationMenu");
    },

    // CLOSE SEARCH INPUT
    closeInputSearch: function() {
      this.$store.dispatch("closeInputSearch");
    },

    // CLOSE PAGE LOADING
    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 4000);
    },

    // GET VECTOR IMAGES
    getVector: function() {
      // check if there are images already in vectors array
      if (this.$store.state.vector.length > 0) {
        this.closePageLoading();
      } else {
        this.$store.dispatch("getVector");
      }
    },

    // SHOW PAGE LOADING
    showPageLoading: function() {
      this.$store.dispatch("showPageLoading");
    }
  },

  beforeRouteLeave(to, from, next) {
    // SHOW PAGE LOADING
    this.showPageLoading();
    next();
  },
  mounted() {
    this.getVector();
    this.closeNavigationMenu();
    this.closeInputSearch();
  }
};
</script>

<style scoped></style>
