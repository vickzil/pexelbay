/* eslint-disable */
<template>
  <!-- #################### FOOTER ############################## -->
  <footer>
    <div class="container-fluid">
      <div class="footer_about">
        <h3>Free images and videos you can use anywhere</h3>
        <p>
          Pexelbay is a vibrant community of creatives, sharing copyright free images and videos. All contents
          are
          released under the Pexelbay License, which makes them safe to use without asking for permission or
          giving
          credit to the artist - even for commercial purposes.
        </p>
      </div>
    </div>
    <div class="footer_menu">
      <router-link to="/about">About Us</router-link>
      <router-link to="/legal">Legal Disclosure</router-link>
      <router-link to="/privacy">Privacy Policy</router-link>
    </div>
    <div class="footer_flex">
      <p>Copyright &copy; {{getCurrentYear}}</p>
      <p>
        Designed By
        <a :href="url" target="_blank">Victor Nwakwue</a>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  computed: {
    getCurrentYear() {
      let date = new Date();
      return date.getFullYear();
    }
  },
  data() {
    return {
      url: "victornwakwue.online"
    };
  }
};
</script>

<style></style>
