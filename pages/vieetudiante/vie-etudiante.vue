<template>
  <div>
    <h1>la vie</h1>
    <header-commun></header-commun>
    <footer-commun></footer-commun>
  </div>
</template>

<script>
module.exports = {
  // name: 'vie-etudiante',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
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