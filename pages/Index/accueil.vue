<template>
  <div>
    <header-accueil></header-accueil>
    <info-accueil></info-accueil>
    <projets-accueil></projets-accueil>
    <inscription-accueil></inscription-accueil>
    <trio-accueil></trio-accueil>
    <footer-commun></footer-commun>
  </div>
</template>

<script lang="text/babel">
export default {
  // name: 'accueil',
  components: {
    "menu-mobile-commun": httpVueLoader("/pages/commun/menu-mobile-commun.vue"),
    "header-accueil": httpVueLoader(
      "/pages/Index/composants/header-accueil.vue"
    ),
    "info-accueil": httpVueLoader("/pages/Index/composants/info-accueil.vue"),
    "projets-accueil": httpVueLoader(
      "/pages/Index/composants/projets-accueil.vue"
    ),
    "inscription-accueil": httpVueLoader(
      "/pages/Index/composants/inscription-accueil.vue"
    ),
    "trio-accueil": httpVueLoader("/pages/Index/composants/trio-accueil.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
  },
};
</script>

<style lang='scss' src='css/accueil.scss'>
</style>