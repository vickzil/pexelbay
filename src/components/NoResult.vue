/* eslint-disable */
<template>
  <div>
    <div class="section">
      <div class="container-fluid">
        <div id="page" class="body_content innerpage">
          <div class="page_content">
            <h3 class="text-center">No Result Found</h3>
            <p>Ooppsss!! We cannot find any result, Please Try Again!!!</p>
          </div>
          <div class="page_content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePageLoading: function() {
      setTimeout(() => {
        this.$store.dispatch("closePageLoading");
      }, 4000);
    }
  },

  mounted() {
    this.closePageLoading();
  }
};
</script>

<style scoped></style>
