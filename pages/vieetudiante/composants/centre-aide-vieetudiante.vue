<template>
  <section id="centre-aide-ve">
      <h1 id="titre-centre-aide">Centre d'aide</h1>
      <img src="/medias/images/GregExplique.PNG" alt="Élève est aidé par un professeur">
      <p id="desc-centre-aide">Besoin d’aide pour vos projets? Des étudiants experts dans leur domaine sont ici pour vous aider. Leur tutorat est disponible tout les mardis et les jeudis dans le local B1152. Venez nous voir!</p>
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
#centre-aide-ve{
  background-color: $fond;
  width: 100%;
  height:100%;
  
}

#titre-centre-aide{
  font-family: "CastIron";
  color: $bleu;
}

#desc-centre-aide{
    font-family: 'manrope';
    color: $blanc;
}

img{
    width: 35em;
    height: 25em;
    object-fit: cover;
    margin: 0;
}


/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {

}
</style>