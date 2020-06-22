/* eslint-disable */
/*eslint no-unused-vars: ["error", {"ards": "none"}]*/
<template>
  <!--###################### NAVBAR ##################### -->
  <div class="navigation">
    <form
      class="mobile_search_div"
      :class="(showSearchInput) ? 'show_search_form' : ''"
      @submit.prevent="submitForm"
    >
      <input
        type="text"
        placeholder="Search for free photos and videos"
        id="mobile_search_input"
        v-model="searcInput"
      />
    </form>
    <div class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="Logo" />
        </router-link>
      </div>

      <form class="search_div" @submit.prevent="submitForm">
        <input
          type="text"
          placeholder="Search for free photos and videos"
          id="search_input"
          autocomplete="off"
          v-model="searcInput"
        />
        <i
          class="fa fa-search"
          @click="showInputSearch"
          id="search"
          :class="(showSearchInput) ? 'hide_search_icon' : ''"
        ></i>
        <div
          class="search_close"
          @click="closeInputSearch"
          :class="(showSearchInput) ? 'search_show' : ''"
        >&times;</div>
      </form>

      <ul class="navigation_item" :class="(showNavMenu) ? 'nav_open' : ''">
        <div class="close_nav" @click="closeNavigationMenu">&times;</div>
        <li>
          <router-link to="/photos">Photos</router-link>
        </li>
        <li>
          <router-link to="/illustration">Illustration</router-link>
        </li>
        <li>
          <router-link to="/explore">Explore</router-link>
        </li>
        <li>
          <router-link to="/vector">Vector</router-link>
        </li>
        <div class="contact_menu">
          <router-link to="/about">About</router-link>
          <router-link to="/legal">Legal</router-link>
          <router-link to="/privacy">Privacy</router-link>
        </div>
      </ul>
      <!-- overlay -->
      <div class="overlay" :class="(showNavMenu) ? 'overlayshow' : ''" @click="closeNavigationMenu"></div>
      <!-- Hamburger menu -->
      <div class="burger" @click="showNavigationMenu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    showNavMenu() {
      return this.$store.getters.showNavMenu;
    },
    showSearchInput() {
      return this.$store.getters.showSearchInput;
    },
    searcInput: {
      get() {
        return this.$store.state.searcInput;
      },
      set(value) {
        return (this.$store.state.searcInput = value);
      }
    }
  },
  methods: {
    submitForm: function() {
      if (this.searcInput.length <= 0) {
        return;
      } else {
        this.$store.dispatch("searchImages", this.searcInput);
        this.$store.state.searchName = this.searcInput;
        this.$store.state.searchPage = true;
        this.showPageLoading();
        setTimeout(() => {
          this.closeNavigationMenu();
          this.closeInputSearch();
          this.hideSearchInput();

          this.$router.push("/search").catch(error => {
            if (error) {
              error;
            }
          });
        }, 1300);
      }
    },
    showNavigationMenu: function() {
      this.$store.dispatch("showNavigationMenu");
    },
    closeNavigationMenu: function() {
      this.$store.dispatch("closeNavigationMenu");
    },
    showInputSearch: function() {
      this.$store.dispatch("showInputSearch");
    },
    closeInputSearch: function() {
      this.$store.dispatch("closeInputSearch");
    },
    hideSearchInput: function() {
      this.$store.state.showSearch = false;
      this.search = "";
    },
    showPageLoading: function() {
      this.$store.dispatch("showPageLoading");
    },
    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 4000);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25 ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
