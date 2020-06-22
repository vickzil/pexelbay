/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="page" class="body_content innerpage">
          <div class="page_content">
            <h3 class="text-center">404 Page</h3>
            <p>Ooppsss!! The page you are looking for cannot be found. Please more more photos</p>
          </div>
          <div class="page_content"></div>
        </div>

        <Explore />
      </div>
    </div>
  </div>
</template>

<script>
import Explore from "./Explore";
export default {
  name: "FourZeroFour",
  components: {
    Explore
  },
  computed: {
    images() {
      return this.$store.getters.getPhotos;
    }
  },

  methods: {
    closeNavigationMenu: function() {
      this.$store.dispatch("closeNavigationMenu");
    },

    closeInputSearch: function() {
      this.$store.dispatch("closeInputSearch");
    },

    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 4000);
    },

    showPageLoading: function() {
      this.$store.dispatch("showPageLoading");
    }
  },

  mounted() {
    this.closeNavigationMenu();
    this.closeInputSearch();
    this.closePageLoading();
  },

  beforeRouteLeave(to, from, next) {
    this.showPageLoading();
    next();
  }
};
</script>

<style scoped></style>
