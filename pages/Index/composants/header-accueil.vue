<template>
  <section id="header">
    <div id="barreDuHaut">
      <a href="https://www.cmaisonneuve.qc.ca/"
        ><img class="test" src="/medias/images/logo_college_maisonneuve.png"
      /></a>
      <button
        id="btnActuDessous"
        class="hover:bg-blue-800 text-blue-100 font-bold p-0.5 pr-8 rounded-full"
      >
        <span
          id="btnActu"
          class="bg-black hover:bg-blue-900 text-blue-100 px-2 font-bold rounded-full"
          ><div class="icon"></div>
          Actualités</span
        >
        <span>Jonhatan reviens à la vie</span>
      </button>
    </div>
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
          <li id="li3accueil" class="uk-animation-slide-right">
            <router-link to="/projets">
              <a>Projets</a>
            </router-link>
          </li>
          <li id="actif">
            <a href="index.html"
              ><img src="/medias/images/logotimgris.png"
            /></a>
          </li>
          <li class="uk-animation-slide-left">
            <router-link to="/vie-etudiante">
              <a>Vie Etudiante</a>
            </router-link>
          </li>
          <li class="uk-animation-slide-left">
            <a href="#contact">Contact</a>
          </li>
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

<style lang='scss' scoped>
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

// FIN MOBILE FIRST -------------------------------------------------------------------------------------------------------------------------------------------

//DEBUT TABLETTE

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
      box-shadow: 0px 0px 4px 1px #000000;
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
      box-shadow: 0px 0px 4px 1px #000000;
    }
  }
  #info {
    background-color: $fond;
  }

  #infoBloc {
    width: 60vw;
    min-height: 300px;
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
    #header {
      background-color: $fond;
      color: #fff;
      #barreDuHaut {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: url("../../../medias/images/halfTone/halftone.png");
        background-size: 50vw;
        background-repeat: repeat-x;
        background-blend-mode: multiply;
        height: 60px;
        * {
          height: 80%;
        }
        #btnActuDessous {
          padding: 2px 30px 2px 2px;
          width: 10%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background-color: rgb(227, 227, 227);
          opacity: 0.7;

          transition: width 0.3s;
          #btnActu {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 130px;

            .icon {
              border-radius: 50%;
              width: 10px;
              height: 10px;
              border: 2px solid red;
              text-align: center;
              position: relative;
              animation: anim-glow 2s ease infinite;
              background: red;
            }
          }
          span {
            color: black;
          }
        }
        #btnActuDessous:hover {
          width: 30%;
        }
      }
    }
    nav {
      display: flex;
      align-items: center;
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
        #li3accueil {
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
    }
  }
}

//FIN GRANDS ECRANS -----------------------------------------------------------------------------------------------------------------------

// ANIMATIONS
@keyframes anim-glow {
  0% {
    box-shadow: 0 0 rgba(255, 0, 0, 1);
  }
  100% {
    box-shadow: 0 0 10px 15px transparent;
    border-width: 2px;
  }
}

@keyframes elargissement {
  0% {
    transform: translate(-20px);
    transform-origin: 100% 100%;
  }
  100% {
    transform: translate(-50px);
    transform-origin: 100% 100%;
  }
}
</style>