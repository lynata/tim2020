<template>
  <div>
    <header-commun></header-commun>
    <categories-projets></categories-projets>
    <footer-commun></footer-commun>
  </div>
</template>

<script lang="text/babel">
export default {
   name: 'projets',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
    "categories-projets": httpVueLoader( "/pages/projets/composants/categories-projets.vue" )
}
}
</script>

<style scoped>
h1 {
  background-color: white;
  color: brown;
}
</style>
