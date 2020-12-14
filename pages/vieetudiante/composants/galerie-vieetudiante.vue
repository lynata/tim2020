<template>
  <section id="galerie-ve">
    <h1 id="titre-galerie">Galerie</h1>
    <h2 id="annee-galerie">2018-2021</h2>
    <div id="imgs-galerie">
      <img src="/medias/images/timscuits.PNG" />
      <img src="/medias/images/elevesEcoutent.PNG" />
      <img src="/medias/images/elevesEcoutent2.PNG" />
      <img src="/medias/images/equipeProf2017 retouch.jpg" />
      <img src="/medias/images/EleveClasse.PNG" />
      <img src="/medias/images/ludo.PNG" />
      <img src="/medias/images/fete.PNG" />
      <img src="/medias/images/Manette.PNG" />
    </div>
  </section>
</template>

<script lang="text/babel">
export default {};
</script>

<style lang="scss" scoped>
$fond: #090c16;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;

/* MOBILE FIRST--------------------------------------------------------------------------------------------- */
#galerie-ve{
  background-color: $fond;
  width: 100%;
  height:100%;
}

#titre-galerie, #annee-galerie{
  font-family: "CastIron";
  color: $bleu;
}


#imgs-galerie {
    img{
        width: 35em;
        height: 25em;
        object-fit: cover;
        margin: 0;
    }
}

/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {

#imgs-galerie {
    img{
        float: center;
    }
}

}
</style>
