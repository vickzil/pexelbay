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
            <ImageContainer :images="images" />
          </div>
          <NoResult v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageContainer from "../components/ImageContainer";
import NoResult from "../components/NoResult";

export default {
  name: "Photos",
  components: {
    ImageContainer,
    NoResult
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
    }
  },

  beforeRouteLeave(to, from, next) {
    this.showPageLoading();
    next();
  },

  mounted() {
    this.closePageLoading();
    this.closeNavigationMenu();
    this.closeInputSearch();
  }
};
</script>

<style scoped></style>
