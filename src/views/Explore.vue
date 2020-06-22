/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="discover" class="body_content">
          <h3>Explore Collections</h3>
          <div class="collections">
            <Collection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Collection from "../components/Collection";

export default {
  name: "Explore",
  components: {
    Collection
  },
  computed: {},
  methods: {
    getCategoryByFashion: function() {
      this.$store.dispatch("getCategoryByFashion");
    },
    getCategoryByNature: function() {
      this.$store.dispatch("getCategoryByNature");
    },
    getCategoryByScience: function() {
      this.$store.dispatch("getCategoryByScience");
    },
    getCategoryByEducation: function() {
      this.$store.dispatch("getCategoryByEducation");
    },
    getCategoryByFeelings: function() {
      this.$store.dispatch("getCategoryByFeelings");
    },
    getCategoryByHealth: function() {
      this.$store.dispatch("getCategoryByHealth");
    },
    getCategoryByPeople: function() {
      this.$store.dispatch("getCategoryByPeople");
    },
    getCategoryByReligion: function() {
      this.$store.dispatch("getCategoryByReligion");
    },
    getCategoryByPlaces: function() {
      this.$store.dispatch("getCategoryByPlaces");
    },
    getCategoryByAnimals: function() {
      this.$store.dispatch("getCategoryByAnimals");
    },
    getCategoryByIndustry: function() {
      this.$store.dispatch("getCategoryByIndustry");
    },
    getCategoryByComputer: function() {
      this.$store.dispatch("getCategoryByComputer");
    },
    getCategoryByFood: function() {
      this.$store.dispatch("getCategoryByFood");
    },
    getCategoryBySports: function() {
      this.$store.dispatch("getCategoryBySports");
    },
    getCategoryByTransportation: function() {
      this.$store.dispatch("getCategoryByTransportation");
    },
    getCategoryByTravel: function() {
      this.$store.dispatch("getCategoryByTravel");
    },
    getCategoryByBuildings: function() {
      this.$store.dispatch("getCategoryByBuildings");
    },
    getCategoryByBusiness: function() {
      this.$store.dispatch("getCategoryByBusiness");
    },
    getCategoryByMusic: function() {
      this.$store.dispatch("getCategoryByMusic");
    },

    closeNavigationMenu: function() {
      this.$store.dispatch("closeNavigationMenu");
    },
    closeInputSearch: function() {
      this.$store.dispatch("closeInputSearch");
    },
    showPageLoading: function() {
      this.$store.dispatch("showPageLoading");
    },
    getPhotos: function() {
      this.$store.dispatch("getPhotos");
    },
    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 5000);
    },
    getAllCategoryImages: function() {
      if (
        this.$store.state.fashion.length > 0 ||
        this.$store.state.nature.length > 0 ||
        this.$store.state.science.length > 0 ||
        this.$store.state.education.length > 0 ||
        this.$store.state.feeling.length > 0 ||
        this.$store.state.health.length > 0 ||
        this.$store.state.people.length > 0 ||
        this.$store.state.places.length > 0 ||
        this.$store.state.animal.length > 0 ||
        this.$store.state.industry.length > 0 ||
        this.$store.state.computer.length > 0 ||
        this.$store.state.sports.length > 0 ||
        this.$store.state.transportation.length > 0 ||
        this.$store.state.travel.length > 0 ||
        this.$store.state.building.length > 0 ||
        this.$store.state.business.length > 0 ||
        this.$store.state.music.length > 0 ||
        this.$store.state.religion.length > 0
      ) {
        this.closePageLoading();
      } else {
        this.getCategoryByFashion();
        this.getCategoryByNature();
        this.getCategoryByScience();
        this.getCategoryByEducation();
        this.getCategoryByFeelings();
        this.getCategoryByHealth();
        this.getCategoryByPeople();
        this.getCategoryByReligion();
        this.getCategoryByPlaces();
        this.getCategoryByAnimals();
        this.getCategoryByIndustry();
        this.getCategoryByComputer();
        this.getCategoryByFood();
        this.getCategoryBySports();
        this.getCategoryByTransportation();
        this.getCategoryByTravel();
        this.getCategoryByBuildings();
        this.getCategoryByBusiness();
        this.getCategoryByMusic();
        this.closePageLoading();
      }
    }
  },
  mounted() {
    this.getAllCategoryImages();
    this.closeNavigationMenu();
    this.closeInputSearch();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    this.showPageLoading();
    next();
  }
};
</script>

<style scoped></style>
