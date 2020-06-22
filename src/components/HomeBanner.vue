/* eslint-disable */
<template>
  <div class="header">
    <div class="home_banner">
      <div class="banner">
        <h3>Stunning free images & royalty free stock</h3>
        <p>
          Pexelbay allows you to search and download creative, smart and
          high-resolution images for your websites
        </p>
        <form class="banner_search" @submit.prevent="submitForm">
          <i class="fa fa-search" id="search_icon" @click="submitForm"></i>
          <input
            type="text"
            class="banner_input"
            v-model="searcInput"
            placeholder="Search free images and videos"
          />
        </form>
        <div class="banner_category">
          <span>Suggested:</span>
          <router-link class="ml-2" :to="{ name: 'Category', params: { id: 'health' } }">health,</router-link>
          <router-link :to="{ name: 'Category', params: { id: 'sports' } }">sports,</router-link>
          <router-link :to="{ name: 'Category', params: { id: 'education' } }">education,</router-link>
          <router-link :to="{ name: 'Category', params: { id: 'places' } }">places,</router-link>
          <router-link :to="{ name: 'Category', params: { id: 'people' } }">people,</router-link>
          <router-link :to="{ name: 'Category', params: { id: 'science' } }">science,</router-link>
          <router-link :to="{ name: 'Category', params: { id: 'business' } }">business,</router-link>
          <router-link :to="{ name: 'Category', params: { id: 'computer' } }">computer,</router-link>
          <div
            v-if="inputError"
            class="d-block text-light text-center bg-danger p-1 mt-2 inputError"
            style="width: 240px; text-align: center!important;"
          >{{inputError}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  data() {
    return {
      inputError: ""
    };
  },
  computed: {
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
        this.inputError = "Please type something...";
        setTimeout(() => {
          this.inputError = "";
        }, 3000);
        return;
      } else {
        this.$store.dispatch("searchImages", this.searcInput);
        this.$store.state.searchName = this.searcInput;
        this.$store.state.searchPage = true;
        this.showPageLoading();
        this.inputError = "";
        setTimeout(() => {
          this.$router.push("/search").catch(error => {
            if (error) {
              error;
            }
          });
        }, 1300);
      }
    },
    showPageLoading: function() {
      this.$store.dispatch("showPageLoading");
    }
  }
};
</script>

<style>
.inputError {
  font-size: 14px !important;
  margin: 9px auto 0px;
}

@media screen and (max-width: 600px) {
  .inputError {
    font-size: 14px !important;
    margin: 9px auto 0px;
  }
}
</style>
