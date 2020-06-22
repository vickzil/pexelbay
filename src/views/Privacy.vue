/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="page" class="body_content innerpage">
          <div class="page_content">
            <h3 class="text-center">Privacy Policy</h3>
            <br />
            <p>
              If you require any more information or have any questions about our privacy policy, please feel
              free to contact us by email at Privacy.
              <br />At Pexelbay we consider the privacy of our visitors to be extremely important. This privacy
              policy document describes in detail the types of personal information is collected and recorded
              by Pexelbay and how we use it.
            </p>
            <p>
              <span class="contact_info">Log Files</span>
              Like many other Web sites, Pexelbay makes use of log files. These files merely logs visitors
              to the site – usually a standard procedure for hosting companies and a part of hosting
              services’s analytics. The information inside the log files includes internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages,
              and possibly the number of clicks. This information is used to analyze trends, administer the
              site, track user’s movement around the site, and gather demographic information. IP addresses,
              and other such information are not linked to any information that is personally identifiable
            </p>
            <p>
              <span class="contact_info">Cookies and Web Beacons</span>
              Pexelbay uses cookies to store information about visitors’ preferences, to record
              user-specific information on which pages the site visitor accesses or visits, and to personalize
              or customize our web page content based upon visitors’ browser type or other information that
              the visitor sends via their browser.
            </p>
            <p>
              <span class="contact_info">Third Party Privacy Policies</span>
              You should consult the respective privacy policies of these third-party ad servers for more
              detailed information on their practices as well as for instructions about how to opt-out of
              certain practices. Pexelbay’s privacy policy does not apply to, and we cannot control the
              activities of, such other advertisers or web sites. You may find a comprehensive listing of
              these privacy policies.
              If you wish to disable cookies, you may do so through your individual browser options. More
              detailed information about cookie management with specific web browsers can be found at the
              browsers’ respective websites. What Are Cookies?.
            </p>
            <p>
              <span class="contact_info">Children’s Information</span>
              We believe it is important to provide added protection for children online. We encourage parents
              and guardians to spend time online with their children to observe, participate in and/or monitor
              and guide their online activity.
              Pexelbay does not knowingly collect any personally identifiable information from children
              under the age of 13. If a parent or guardian believes that Pexelbay has in its database the
              personally-identifiable information of a child under the age of 13, please contact us
              immediately (using the contact in the first paragraph) and we will use our best efforts to
              promptly remove such information from our records.
            </p>

            <p>
              <span class="contact_info">Consent</span>
              By using our website, you hereby consent to our privacy policy and agree to its terms.
            </p>

            <p>
              <span class="contact_info">Update</span>
              This Privacy Policy was last updated on: Tuesday, March 12th, 2019.
              Should we update, amend or make any changes to our privacy policy, those changes will be posted
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy",
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
