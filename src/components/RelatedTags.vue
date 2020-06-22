<template>
  <div class="related_tag">
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'health' } }">health</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'animal' } }">animal</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'sports' } }">sports</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'education' } }">education</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'food' } }">food</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'industry' } }">industry</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'music' } }">music</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'places' } }">places</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'people' } }">people</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'science' } }">science</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'transport' } }">transport</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'travel' } }">travel</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'business' } }">business</router-link>
    <router-link class="btn_tag" :to="{ name: 'Category', params: { id: 'computer' } }">computer</router-link>
  </div>
</template>

<script>
export default {
  name: "RelatedTags"
};
</script>

<style>
</style>