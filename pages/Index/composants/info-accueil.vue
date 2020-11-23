<template>
  <section id="info">
    <div id="infoBloc">
      <!-- boutons-->
      <div
        uk-switcher="animation: uk-animation-fade; toggle: > *"
        id="infoBoutons"
        class="uk-button-group"
      >
        <button>TIM</button>
        <button>Conception</button>
        <button>Mediatisation</button>
        <button>Integration</button>
      </div>
      <!-- <div
        uk-switcher="animation: uk-animation-fade; toggle: > *"
        id="infoBoutons"
        class="uk-button-group"
      >
        <button>TIM</button>
        <button>Conception</button>
        <button>Mediatisation</button>
        <button>Integration</button>
      </div> -->

      <!-- bloc d'info -->
      <ul class="uk-switcher">
        <li>
          <h1>Technique d'intÉgration multimÉdia</h1>
          Maisonneuve est le seul cégep sur l’Île de Montréal à offrir ce
          programme qui vous offre une immersion dans le monde du jeu 2D/3D, du
          Web, des technologies mobiles et des médias numériques, tout en
          apprenant différents langages de programmation. Dans ce programme,
          vous apprendrez à identifier, analyser, imaginer, réaliser et
          coordonner un projet multimédia et les différentes étapes de
          production qui y sont liées :
        </li>
        <li>
          <h1>Conception</h1>
          La conception est la conceptualisation de concept conceptable.
        </li>
        <li>
          <h1>Mediatisation</h1>
          Création de médias de tout formes: text, images, animation, et plus
          encore!
        </li>
        <li>
          <h1>Integration</h1>
          Intègre les éléments des pages d’un site.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
module.exports = {};
</script>

<style lang="scss">
#infoBloc {
  position: relative;
}
@media (min-width: 600px) {
  #info {
    position: relative;
  }
  #infoBloc {
    position: absolute;
    top: -40vh;
    box-shadow: 0px 0px 4px 1px #000000;
  }
}
@media (min-width: 1200px) {
  #infoBloc {
    min-height: 250px;
  }
  #infoBoutons {
    display: flex;
    flex-flow: row;
    position: absolute;
    right: -3em;
    top: 30vh;
    justify-content: space-between;
  }
  #infoBoutons button {
    margin: 0 0.7em;
    min-width: 100px;
  }
}
</style>