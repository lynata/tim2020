<template>
  <section id="header">
    <div id="barreDuHaut"></div>
    <nav>
      <div>
        <ul>
          <li class="uk-animation-slide-right">
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
          <li id="actif">
            <a href="index.html"
              ><img src="/medias/images/logotimgris.png"
            /></a>
          </li>
          <li><a href="/pages/vieetudiante.html">Vie Etudiante</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <input type="checkbox" id="checkNav" />
    <label
      for="checkNav"
      id="navMobile"
      v-on:click="clickMenu = !clickMenu"
    ></label>
    <menu-mobile-commun v-if="clickMenu == true"></menu-mobile-commun>

    <div
      id="caroussel"
      uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 6000; pause-on-hover: false; ratio: false"
    >
      <ul id="caroussel-images" class="uk-slideshow-items">
        <li>
          <img
            src="/medias/images/Caroussel_Accueil/GregExplique_diapo.PNG"
            alt=""
            uk-cover
          />
        </li>
        <li>
          <img
            src="/medias/images/Caroussel_Accueil/profsHeureux_diapo.PNG"
            alt=""
            uk-cover
          />
        </li>
        <li>
          <img
            src="/medias/images/Caroussel_Accueil/elevesEcoutent2_diapo.png"
            alt=""
            uk-cover
          />
        </li>
        <li>
          <img
            src="/medias/images/Caroussel_Accueil/elevesEcoutent2_diapo.png"
            alt=""
            uk-cover
          />
        </li>
        <li>
          <img
            src="/medias/images/Caroussel_Accueil/ludo_diapo.PNG"
            alt=""
            uk-cover
          />
        </li>
        <li>
          <img
            src="/medias/images/Caroussel_Accueil/fete_diapo.png"
            alt=""
            uk-cover
          />
        </li>
      </ul>
    </div>

    <!-- <img src="medias/images/imgaccueil.png"/> -->
  </section>
</template>

<script>
module.exports = {
  name: "header-accueil",
  components: {
    "menu-mobile-commun": httpVueLoader("/pages/commun/menu-mobile-commun.vue"),
  },
  data() {
    return {
      clickMenu: false,
    };
  },
};
</script>

<style lang='scss' >
$fond: #101832;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;
$boxNoir: -5px 5px 0px 1px #000;

@font-face {
  font-family: CastIron;
  src: url("/medias/fonts/CastIron.otf") format("opentype");
}

@font-face {
  font-family: Manrope;
  src: url("/medias/fonts/Manrope-VariableFont_wght.ttf") format("truetype");
}

a {
  color: $blanc;
}
a:hover {
  color: $bleu;
  text-decoration: none;
}

#header {
  position: relative;
}

//DEBUT CSS - - - MOBILE FIRST      --------------------------------------------------------------------------------------------------------------------------------

nav {
  background-color: $fond;
  display: none;
}

#navMobile {
  background: linear-gradient(
    to bottom,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 0, 36, 1) 20%,
    transparent 20%,
    transparent 40%,
    rgba(2, 0, 36, 1) 40%,
    rgba(2, 0, 36, 1) 60%,
    transparent 60%,
    transparent 80%,
    rgba(2, 0, 36, 1) 80%,
    rgba(2, 0, 36, 1) 100%
  );
  height: 48px;
  width: 48px;
  position: absolute;
  margin: 1%;
  right: 10px;
  cursor: pointer;
  align-self: flex-end;
  z-index: 999;
}

#checkNav:checked ~ #navMobile {
  transform: rotate(90deg);
}

// #checkNav:checked ~ #global {
//   transform: translateY(100%);
// }

// #checkNav ~ #global {
//   transform: translateY(0%);
// }

#checkNav {
  display: none;
}

#info {
  background-color: $fond;
}

#inscription {
  background-color: $fond;
}

#trio {
  background-color: $fond;
}

#infoBloc {
  width: 80vw;
  padding: 1em 1em 3em 1em;
  margin: 0 auto;
  background-color: $blanc;
  font-family: Manrope;
  box-shadow: $boxNoir;

  h1 {
    font-family: CastIron;
    font-size: 2em;
  }
}

#infoBoutons {
  display: none;
}

#footer {
  background-color: $fond;
}
// #footer {
//   background-color: $fond;
// }

// FIN MOBILE FIRST

//DEBUT TABLETTE    --------------------------------------------------------------------------------------------------------------------------------------

@media (min-width: 600px) {
  body {
    background: red;
  }
  #navMobile,
  #checkNav {
    display: none;
  }
  #header {
    background-color: $fond;
    color: #fff;

    nav {
      background-color: $bleuFond;
      // margin-top:3em;
      display: flex;
      justify-content: center;
      width: 100%;

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
      }
    }

    #actif {
      padding: 1em;
      background-color: #000;
      z-index: 2;
      align-items: flex-end;
    }
  }
  #info {
    background-color: $fond;
  }

  #infoBloc {
    width: 60vw;
    padding: 1em 4em 1em 1em;
    margin-left: 2em;
    position: relative;
  }

  #infoBoutons {
    display: flex;
    flex-flow: column;
    position: absolute;
    right: -5.5em;
    top: 0;

    button {
      background-color: $bleuFond;
      padding: 10px;
      margin-top: 0.5em;
      font-family: CastIron;
      font-size: 1.5em;
      color: $blanc;
      letter-spacing: 0.08em;
      box-shadow: $boxBleu;
    }

    button:hover {
      background-color: $fond;
    }
  }
}

//FIN TABLETTE        ----------------------------------------------------------------------------------------------------------------------------------------------

//DEBUT GRANDS ECRANS
@media (min-width: 1200px) {
  body {
    background: pink;
  }

  #header {
    background-color: $fond;
    color: #fff;
    #barreDuHaut {
      height: 55px;
    }
    nav {
      display: flex;
      background-color: $bleuFond;
      ul {
        margin: 0 auto;
        text-align: center;
        flex-direction: row;
        align-items: center;

        li {
          padding: 0.5em;
          font-family: CastIron;
          font-size: 2em;
        }
        li:nth-child(3) {
          margin-right: 10.5em;
        }
        #actif {
          padding: 1em;
          background-color: #000;
          position: absolute;
          z-index: 2;
        }
        li:hover {
          color: $bleu;
        }
      }
    }

    #caroussel {
      height: 700px !important;
      #caroussel-images {
        height: 100% !important;
        ul {
          height: 100%;
          li {
            height: 300px;
          }
        }
      }

      body {
        background: rgb(255, 185, 197);
      }
    }
  }
}
//FIN GRANDS ECRANS

#caroussel {
  height: 700px !important;
  #caroussel-images {
    height: 100% !important;
    ul {
      height: 100%;
      li {
        height: 300px;
      }
    }
  }

  body {
    background: pink;
  }
}
</style>