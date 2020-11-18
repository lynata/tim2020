<template>
  <div>
    <!-- navigation -->
    <!-- trigger pour nav mobile -->
    <input type="checkbox" id="checkNav" />
    <label
      for="checkNav"
      id="navMobile"
      v-on:click="clickMenu = !clickMenu"
    ></label>
    <menu-mobile v-if="clickMenu == true"></menu-mobile>

    <section id="header">
      <nav>
        <div>
          <ul>
            <li class="uk-animation-slide-right">
              <router-link to="/cours">
                <a>Cours</a>
              </router-link>
            </li>
            <li class="uk-animation-slide-right">
              <router-link to="/profs">
                <a>Profs</a>
              </router-link>
            </li>
            <li class="uk-animation-slide-right">
              <router-link to="/projets">
                <a>Projets</a>
              </router-link>
            </li>
            <li>
              <a href="index.html"
                ><img src="/medias/images/logotimgris.png"
              /></a>
            </li>
            <li class="uk-animation-slide-left">
              <router-link to="/vieetudiante">
                <a href="/pages/vieetudiante.html">Vie Etudiante</a>
              </router-link>
            </li>
            <li class="uk-animation-slide-left">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
module.exports = {
  components: {
    "menu-mobile": httpVueLoader("/pages/commun/menu-mobile-commun.vue"),
  },
  data() {
    return {
      clickMenu: false,
    };
  },
};
</script>

<style  lang='scss'>
$fond: #101832;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
//DEBUT CSS MOBILE FIRST-----------------------------

html {
  background-color: $fond;
}
@font-face {
  font-family: CastIron;
  src: url("/medias/fonts/CastIron.otf") format("opentype");
}

@font-face {
  font-family: Manrope;
  src: url("/medias/fonts/Manrope-VariableFont_wght.ttf") format("truetype");
}
//FIN MOBILE FIRST------------------------------------
//DEBUT TABLETTE---------------------------------------
@media (min-width: 600px) {
  #navMobile,
  #checkNav {
    display: none;
  }

  nav {
    background-color: $bleuFond;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  img {
    width: 4em;
    background: none;
  }

  #header {
    background-color: $fond;
    color: #fff;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto;

      li {
        display: inline-block;
        padding: 0.5em;
        font-family: CastIron;
        font-size: 2em;
      }
      a {
        color: $blanc;
      }
      a:hover {
        color: $bleu;
      }
    }
  }
}
//FIN TABLETTE---------------------------------------------------------------------------------------

//DEBUT GRANDS ECRANS--------------------------------------------------------------------------------
@media (min-width: 1200px) {
  body {
    background: pink;
  }
}
//FIN GRANDS ECRANS
</style>