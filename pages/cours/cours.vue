<template>
  <div>
    <header-commun></header-commun>
    <session-1></session-1>
    <footer-commun></footer-commun>
  </div>
</template>

<script lang="text/babel">
export default {
  // name: 'cours',
  components: {
    "header-commun": httpVueLoader("/pages/commun/header-commun.vue"),
    "session-1": httpVueLoader(
      "/pages/cours/composants/session-1.vue"
    ),
    "cours-session": httpVueLoader("/pages/cours/composants/cours-session.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
  },
};
</script>

<style scoped>
/* body {
  background-color: #090c16;
} */
/* div {
  background-color: #090c16;
} */
</style>