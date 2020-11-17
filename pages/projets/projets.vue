<template>
  <div>
    <h1>les projets</h1>
    <header-commun></header-commun>
    <footer-commun></footer-commun>
  </div>
</template>

<script>
module.exports = {
  // name: 'projets',
  components: {
    "header-commun": httpVueLoader("/pages/Index/composants/header-commun.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
  },
};
</script>

<style scoped>
h1 {
  background-color: white;
  color: brown;
}
</style>