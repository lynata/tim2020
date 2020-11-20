<template>
  <div>
    <header-commun></header-commun>
    <cours-et-filtres-cours></cours-et-filtres-cours>
    <footer-commun></footer-commun>
  </div>
</template>

<script>
module.exports = {
  // name: 'cours',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
    "cours-et-filtres-cours": httpVueLoader("/pages/cours/composants/cours-et-filtres-cours.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
  },
};
</script>

<style scoped>
/* h1 {
  background-color: white;
  color: brown;
} */
</style>