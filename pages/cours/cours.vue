<template>
  <div
    id="filtrage"
    uk-filter="target: .js-filter"
    class="uk-animation-slide-bottom-small"
  >
    <header-commun></header-commun>
    <h1>Cours</h1>
    <ul class="uk-subnav uk-subnav-pill uk-animation-slide-right">
      <li uk-filter-control="[data-tags*='Tous']"><a href="#">Tous</a></li>
      <li uk-filter-control="[data-tags*='Web']"><a href="#">Web</a></li>
      <li uk-filter-control="[data-tags*='Jeu']"><a href="#">Jeux vidéo</a></li>
      <li uk-filter-control="[data-tags*='3D']"><a href="#">3D</a></li>
      <li uk-filter-control="[data-tags*='Design']"><a href="#">Design</a></li>
      <li uk-filter-control="[data-tags*='Prog']">
        <a href="#">Programmation</a>
      </li>
      <li uk-filter-control="[data-tags*='VideoSon']">
        <a href="#">Vidéo et son</a>
      </li>
      <li uk-filter-control="[data-tags*='ImageArt']">
        <a href="#">Image et art numériques</a>
      </li>
    </ul>
    <session-1></session-1>
    <session-2></session-2>
    <session-3></session-3>
    <session-4></session-4>
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
    "session-2": httpVueLoader(
      "/pages/cours/composants/session-2.vue"
    ),
    "session-3": httpVueLoader(
      "/pages/cours/composants/session-3.vue"
    ),
    "session-4": httpVueLoader(
      "/pages/cours/composants/session-4.vue"
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
h1 {
  font-family: Castiron;
  color: $bleu;
  font-size: 9vw;
  margin-left: 1.5vw;
}
#filtre li {
  padding: 1em;
  box-shadow: $boxBleu;
  margin: 1em 2em;
}
html {
  background-color: $fond;
}
.uk-subnav-pill > .uk-active > a {
  background-color: $bleu !important;
}
</style>