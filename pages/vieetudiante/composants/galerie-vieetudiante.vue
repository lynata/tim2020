<template>
  <section id="galerie-ve">
    <h1 id="titre-galerie">Galerie</h1>
    <h2 id="annee-galerie">2018-2021</h2>
    <div id="imgs-galerie" tabindex="-1" uk-slider="center: true">
      <ul
        class="uk-slider-items uk-grid uk-grid-match"
        uk-height-viewport="offset-top: true; offset-bottom: 30"
      >
        <img src="/medias/images/timscuits.PNG" />

        <img src="/medias/images/elevesEcoutent.PNG" />

        <img src="/medias/images/elevesEcoutent2.PNG" />
        <img src="/medias/images/equipeProf2017 retouch.jpg" />
        <img src="/medias/images/EleveClasse.PNG" />
        <img src="/medias/images/ludo.PNG" />
        <img src="/medias/images/fete.PNG" />
        <img src="/medias/images/Manette.PNG" />
      </ul>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
  </section>
</template>

<script lang="text/babel">
export default {};
</script>

<style lang="scss" scoped>
$fond: #090c16;
$bleuFonce: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: 5px 5px 0px 1px $bleu;

/* MOBILE FIRST--------------------------------------------------------------------------------------------- */

#galerie-ve {
  background-image: url("/medias/images/halfTone/HalftoneClean.png");
  background-size: 17em;
  background-repeat: repeat-x;
  background-color: $fond;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}

#titre-galerie,
#annee-galerie {
  font-family: "CastIron";
  margin: 0;
}

#titre-galerie {
  color: $blanc;
  font-size: 3.5em;
}

#annee-galerie {
  color: $bleu;
  font-size: 2.5em;
}

#imgs-galerie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (max-width: 599px) {
    img {
      width: 90vw;
      height: 70vh;
      // height: 17em;
      object-fit: cover;
      margin: 1.5em;
      box-shadow: $boxBleu;
    }
  }
}

/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {
  #titre-galerie {
    color: $blanc;
    font-size: 4em;
  }

  #annee-galerie {
    color: $bleu;
    font-size: 3em;
  }

  #imgs-galerie {
    flex-wrap: wrap;
    img {
      width: 50vw;
      height: 70vh;
    }
  }
}
</style>
