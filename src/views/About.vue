/* eslint-disable */
<template>
  <div>
    <PageBanner />
    <div class="section">
      <div class="container-fluid">
        <div id="page" class="body_content forabout">
          <div class="page_content">
            <h3>About Us</h3>
            <p>
              Pexelbay provides high quality and completely free stock photos
              licensed under the Pexelbay license. All
              photos are nicely tagged, searchable and also easy to
              discover through our discover pages.
            </p>
          </div>

          <div class="page_content">
            <i class="fa fa-picture-o page-icon"></i>
            <h3>Photos</h3>
            <p>
              We have hundreds of thousands free stock photos and every day new high resolution photos will be
              added. All photos are hand-picked from photos uploaded by our users or sourced from free image
              websites. We make sure all published pictures are high-quality and licensed under the Pexelbay
              license.
            </p>
          </div>

          <div class="page_content">
            <i class="fa fa-camera page-icon"></i>
            <h3>Photos Source</h3>
            <p>
              Only free images from our community
              of photographers are added to our photo database. We
              constantly try to deliver as many high quality free stock photos
              as possible to the creatives
              who use our website
            </p>
          </div>

          <div class="page_content">
            <i class="fa fa-users page-icon"></i>
            <h3>Team</h3>
            <p>
              Pexelbay is run by
              <a href="https://victornwakwue.online">Victor Nwakwue</a>. The photo and data source id from
              <a href="https://pixabay.com/api/">Pixabay Api</a> .
            </p>
          </div>

          <div class="page_content">
            <i class="fa fa-users page-icon"></i>
            <h3>Mission</h3>
            <p>
              We help millions of designers, writers, artists, programmers and
              other creators to get access to beautiful photos that they can
              use freely which empowers them to create amazing products, designs,
              stories, websites, apps, art and other work. We call it: "Empowering Creators".
            </p>
          </div>

          <div class="page_content">
            <i class="fa fa-user page-icon"></i>
            <h3>Developer</h3>
            <p>
              Get your own website with full functionalities at a cheaper rate. contact
              <a
                href="https://victornwakue.online"
              >Victor Nwakwue</a>
              Now.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from "../components/PageBanner";

export default {
  name: "About",
  components: {
    PageBanner
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
    this.closeNavigationMenu();
    this.closeInputSearch();
    this.closePageLoading();
  }
};
</script>

<style scoped></style>
