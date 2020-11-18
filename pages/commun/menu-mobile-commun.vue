<template>
  <div>
    <ul>
      <li>
        <a href="index.html"><img src="/medias/images/logotimgris.png" /></a>
      </li>
      <li>
        <router-link to="/cours">
          <a>Cours</a>
        </router-link>
      </li>
      <li>
        <router-link to="/profs">
          <a>Profs</a>
        </router-link>
      </li>
      <li>
        <router-link to="/projets">
          <a>Projets</a>
        </router-link>
      </li>
      <li><a href="/pages/vieetudiante.html">Vie Etudiante</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</template>



<style scoped lang='scss'>
$fond: #101832;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;
$boxNoir: -5px 5px 0px 1px #000;

div {
  position: fixed;
  padding-top: 20vh;
  top: 0%;
  left: 0%;
  background-color: $fond;
  z-index: 99;
  height: 150vh;
  width: 100vw;
  img {
    margin: 0 auto;
    width: 4em;
    padding-bottom: 0.5em;
  }
  ul {
    text-align: center;
    font-size: 2.5em;
    font-family: CastIron;
    line-height: 1.5em;
  }
  a {
    color: $bleu;
  }
  a:hover {
    color: $blanc;
  }
}
</style>