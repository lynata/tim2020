<template>
  <div>
    <header-commun></header-commun>
    <tous-profs></tous-profs>
    <footer-commun></footer-commun>
  </div>
</template>


<script>
module.exports = {
  // name: 'profs',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
    "tous-profs": httpVueLoader("pages/profs/composants/tous-profs.vue"),
  },
};
</script>

<style scoped>
/* h1 {
        background-color: white;
        color: brown;
    } */
</style>