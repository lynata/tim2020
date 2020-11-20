<template>
  <div>
    <header-commun></header-commun>
    <info-vieetudiante></info-vieetudiante>
    <footer-commun></footer-commun>
  </div>
</template>

<script>
module.exports = {
  // name: 'vie-etudiante',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
    "info-vieetudiante": httpVueLoader(
      "/pages/vieetudiante/composants/info.vieetudiante.vue"
    ),
  },
};
</script>

<style scoped>
h1 {
  background-color: white;
  color: brown;
}
</style>