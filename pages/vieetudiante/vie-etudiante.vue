<template>
  <div>
    <header-commun></header-commun>
    <info-vieetudiante></info-vieetudiante>
    <nouvelles-vieetudiante></nouvelles-vieetudiante>
    <centre-aide-vieetudiante></centre-aide-vieetudiante>
    <galerie-vieetudiante></galerie-vieetudiante>
    <footer-commun></footer-commun>
  </div>
</template>

<script lang="text/babel">
export default {
  // name: 'vie-etudiante',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
    "info-vieetudiante": httpVueLoader(
      "/pages/vieetudiante/composants/info-vieetudiante.vue"
    ),
    "nouvelles-vieetudiante": httpVueLoader(
      "/pages/vieetudiante/composants/nouvelles-vieetudiante.vue"
    ),
    "centre-aide-vieetudiante": httpVueLoader(
      "/pages/vieetudiante/composants/centre-aide-vieetudiante.vue"
    ),
    "galerie-vieetudiante": httpVueLoader(
      "/pages/vieetudiante/composants/galerie-vieetudiante.vue"
    ),
  },
};
</script>

<style lang="scss" scoped>
$fond: #090c16;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;

/* MOBILE FIRST--------------------------------------------------------------------------------------------- */
#body {
  background-color: $fond;
}

/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {
}
</style>
