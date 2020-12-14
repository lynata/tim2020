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
      <div id="bgHautNav"></div>
      <nav>
        <div>
          <ul>
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
            <li>
              <a href="index.html"
                ><img class="logoTIM" src="/medias/images/logotimgris.png"
              /></a>
            </li>
            <li>
              <router-link to="/vie-etudiante">
                <a>Vie Etudiante</a>
              </router-link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script lang="text/babel">
export default {
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

<style lang="scss" scoped>
$fond: #090c16;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
//DEBUT CSS MOBILE FIRST-----------------------------

html {
  background-color: $fond;
}
@font-face {
  font-family: "CastIron";
  src: url("/medias/fonts/CastIron.otf") format("opentype");
}

@font-face {
  font-family: "Manrope";
  src: url("/medias/fonts/Manrope-VariableFont_wght.ttf") format("truetype");
}
nav {
  display: none;
}

.logoTIM {
  filter: none;
}

.logoTIM:hover {
  filter: invert(66%) sepia(66%) saturate(1497%) hue-rotate(160deg)
    brightness(106%) contrast(102%) drop-shadow(2px 2px 15px rgb(28, 44, 92));
}

#navMobile {
  background: linear-gradient(
    to bottom,
    $bleu 0%,
    rgba(2, 0, 36, 1) 20%,
    transparent 20%,
    transparent 40%,
    $bleu 40%,
    rgba(2, 0, 36, 1) 60%,
    transparent 60%,
    transparent 80%,
    $bleu 80%,
    rgba(2, 0, 36, 1) 100%
  );
  height: 48px;
  width: 48px;
  position: fixed;
  margin: 1%;
  right: 10px;
  top: 2%;
  cursor: pointer;
  align-self: flex-end;
  z-index: 999;
}

#checkNav:checked ~ #navMobile {
  transform: rotate(90deg);
}
#checkNav {
  display: none;
}

//FIN MOBILE FIRST------------------------------------
//DEBUT TABLETTE---------------------------------------
@media (min-width: 600px) {
  #navMobile,
  #checkNav {
    display: none;
  }
  #bgHautNav {
    height: 3em;
    background-image: url("../../medias/images/halfTone/halftone.png");
    background-size: 50vw;
    background-repeat: repeat-x;
  }
  nav {
    background-color: $bleuFond;
    display: flex !important;
    justify-content: center;
    width: 100%;
    img {
      width: 4em;
      background: none;
    }
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
</style>
