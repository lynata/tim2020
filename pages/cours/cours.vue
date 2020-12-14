<template>
  <div>
    <header-commun></header-commun>
    <session-1></session-1>
    <session-5></session-5>
    <session-6></session-6>
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
     "session-5": httpVueLoader(
      "/pages/cours/composants/session-5.vue"
    ),
     "session-6": httpVueLoader(
      "/pages/cours/composants/session-6.vue"
    ),
    "cours-session": httpVueLoader("/pages/cours/composants/cours-session.vue"),
    "footer-commun": httpVueLoader("/pages/commun/footer-commun.vue"),
  },
};
</script>

<style lang="scss" scoped>
$fond: #090c16;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;
$boxNoir: -5px 5px 0px 1px #000;
#filtre li {
  padding: 1em;
  box-shadow: $boxBleu;
  margin: 1em 2em;
}
</style>