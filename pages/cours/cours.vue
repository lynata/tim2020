<template>
  <div>
    <header-commun></header-commun>
    <cours-et-filtres-cours></cours-et-filtres-cours>
    <cours-session></cours-session>
    <footer-commun></footer-commun>
  </div>
</template>

<script>
module.exports = {
  // name: 'cours',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
    "cours-et-filtres-cours": httpVueLoader(
      "/pages/cours/composants/cours-et-filtres-cours.vue"
    ),
    "cours-session": httpVueLoader("/pages/cours/composants/cours-session.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
  },
};
</script>

<style scoped>
body {
  background-color: #101832;
}
</style>