<template>
  <div class="collection">
    <CollectionFashionCard :getFashion="getFashion" />
    <CollectionNatureCard :getNature="getNature" />
    <CollectionTravelCard :getTravel="getTravel" />
    <CollectionScienceCard :getScience="getScience" />
    <CollectionEducationeCard :getEducation="getEducation" />
    <CollectionFeelingCard :getFeeling="getFeeling" />
    <CollectionHealthCard :getHealth="getHealth" />
    <CollectionPeopleCard :getPeople="getPeople" />
    <CollectionPlacesCard :getPlaces="getPlaces" />
    <CollectionAnimalCard :getAnimal="getAnimal" />
    <CollectionIndustryCard :getIndustry="getIndustry" />
    <CollectionComputerCard :getComputer="getComputer" />
    <CollectionSportsCard :getSports="getSports" />
    <CollectionTransportationCard :getTransportation="getTransportation" />
    <CollectionBuildingCard :getBuilding="getBuilding" />
    <CollectionBusinessCard :getBusiness="getBusiness" />
    <CollectionMusicCard :getMusic="getMusic" />
    <CollectionReligionCard :getReligion="getReligion" />
    <CollectionFoodCard :getFood="getFood" />
  </div>
</template>

<script>
import CollectionFashionCard from "./CollectionFashionCard";
import CollectionNatureCard from "./CollectionNatureCard";
import CollectionScienceCard from "./CollectionScienceCard";
import CollectionEducationeCard from "./CollectionEducationeCard";
import CollectionFeelingCard from "./CollectionFeelingCard";
import CollectionHealthCard from "./CollectionHealthCard";
import CollectionPeopleCard from "./CollectionPeopleCard";
import CollectionPlacesCard from "./CollectionPlacesCard";
import CollectionAnimalCard from "./CollectionAnimalCard";
import CollectionIndustryCard from "./CollectionIndustryCard";
import CollectionComputerCard from "./CollectionComputerCard";
import CollectionSportsCard from "./CollectionSportsCard";
import CollectionTransportationCard from "./CollectionTransportationCard";
import CollectionTravelCard from "./CollectionTravelCard";
import CollectionBuildingCard from "./CollectionBuildingCard";
import CollectionBusinessCard from "./CollectionBusinessCard";
import CollectionMusicCard from "./CollectionMusicCard";
import CollectionReligionCard from "./CollectionReligionCard";
import CollectionFoodCard from "./CollectionFoodCard";

export default {
  name: "Collection",
  components: {
    CollectionFashionCard,
    CollectionNatureCard,
    CollectionScienceCard,
    CollectionEducationeCard,
    CollectionFeelingCard,
    CollectionHealthCard,
    CollectionPeopleCard,
    CollectionPlacesCard,
    CollectionAnimalCard,
    CollectionIndustryCard,
    CollectionComputerCard,
    CollectionSportsCard,
    CollectionTransportationCard,
    CollectionTravelCard,
    CollectionBuildingCard,
    CollectionBusinessCard,
    CollectionMusicCard,
    CollectionReligionCard,
    CollectionFoodCard
  },
  computed: {
    getFashion() {
      return this.$store.state.fashion;
    },
    getNature() {
      return this.$store.state.nature;
    },
    getScience() {
      return this.$store.state.science;
    },
    getEducation() {
      return this.$store.state.education;
    },
    getFeeling() {
      return this.$store.state.feeling;
    },
    getHealth() {
      return this.$store.state.health;
    },
    getPeople() {
      return this.$store.state.people;
    },
    getPlaces() {
      return this.$store.state.places;
    },
    getAnimal() {
      return this.$store.state.animal;
    },
    getIndustry() {
      return this.$store.state.industry;
    },
    getComputer() {
      return this.$store.state.computer;
    },
    getSports() {
      return this.$store.state.sports;
    },
    getTransportation() {
      return this.$store.state.transportation;
    },
    getTravel() {
      return this.$store.state.travel;
    },
    getBuilding() {
      return this.$store.state.building;
    },
    getBusiness() {
      return this.$store.state.business;
    },
    getMusic() {
      return this.$store.state.music;
    },
    getReligion() {
      return this.$store.state.religion;
    },
    getFood() {
      return this.$store.state.food;
    }
  },

  methods: {
    shuffleArray: function(array) {
      var ctr = array.length,
        temp,
        index;
      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
      }
      return array;
    },
    showPageLoading: function() {
      this.$store.dispatch("showPageLoading");
    },
    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 5000);
    },

    checkIfResponseIsSuccessfull: function() {
      if (this.getFashion.length > 0) {
        this.closePageLoading();
      }
    }
  },
  mounted() {
    this.showPageLoading();
    this.checkIfResponseIsSuccessfull();
  }
};
</script>

<style>
</style>