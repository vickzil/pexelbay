/* eslint-disable */
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <PageLoading v-if="pageLoading" />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoading from "./components/PageLoading";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    PageLoading
  },
  computed: {
    // GET PAGE LOADING
    pageLoading() {
      return this.$store.getters.pageLoading;
    },
    // GENERATE RANDOM WORDS
    generateWords() {
      return this.$store.getters.generateWords;
    }
  },
  methods: {
    // FETCH IMAGES
    getImages: function() {
      this.$store.dispatch("getImages");
    },
    // GET VECTOR IMAGES
    getVector: function() {
      this.$store.dispatch("getVector");
    },
    getPhotos: function() {
      this.$store.dispatch("getPhotos", 1);
    },
    getIllustration: function() {
      this.$store.dispatch("getIllustration");
    }
  },
  created() {
    // FETCH IMAGES
    this.getImages();
    this.getVector();
    // this.getPhotos();
    this.getIllustration();
  },
  watch: {
    // WATCH WHEN ROUTES CHANGES
    $route: {
      handler: to => {
        document.title = to.meta.title || "Free stock photos & videos";
      },
      immediate: true
    }
  }
};
</script>

