/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="page" class="body_content innerpage">
          <div class="page_content">
            <h3>Legal Disclosure</h3>
          </div>

          <div class="page_content">
            <h3>Contact</h3>
            <p>
              <span class="contact_info">E-mail: info@pexelbay@yahoo.com</span>
              <span class="contact_info">Phone: 09059053779</span>
            </p>
          </div>

          <div class="page_content">
            <h3>Disclaimer</h3>
            <p>
              <span class="contact_info">Accountability for content</span>
              The contents of our pages have been created with the utmost care. However, we cannot guarantee
              the contents' accuracy, completeness or topicality. According to statutory provisions, we are
              furthermore responsible for our own content on these web pages. In this context, please note
              that we are accordingly not obliged to monitor merely the transmitted or saved information of
              third parties, or investigate circumstances pointing to illegal activity. Our obligations to
              remove or block the use of information under generally applicable laws remain unaffected by this
              as per §§ 8 to 10 of the Telemedia Act (TMG).
            </p>
            <br />

            <p>
              <span class="contact_info">Accountability for Links</span>
              Responsibility for the content of external links (to web pages of third parties) lies solely
              with the operators of the linked pages. No violations were evident to us at the time of linking.
              Should any legal infringement become known to us, we will remove the respective link
              immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legal",
  components: {},

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
