<template>
  <section id="centre-aide-ve">
      <h1 id="titre-centre-aide">Centre d'aide</h1>
      <img src="/medias/images/GregExplique.PNG" alt="Élève est aidé par un professeur">
      <p id="desc-centre-aide">Besoin d’aide dans vos projets? Nos étudiants experts dans leur domaine sont ici pour vous aider! Ils sont disponible tous les mardis et les jeudis dans le local B1152. Venez nous voir!</p>
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

/* MOBILE FIRST--------------------------------------------------------------------------------------------- */

#centre-aide-ve{
  background-image: linear-gradient($bleu,$fond);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  align-content:space-around
  
}

#titre-centre-aide{
  font-family: "CastIron";
  color: $blanc;
  font-size:3.5em;
}

#desc-centre-aide{
    font-family: 'manrope';
    text-align: justify;
    color: $blanc;
    padding:1.5em;
}

img{
    width: 27em;
    height: 17em;
    object-fit: cover;
    margin: 0;
    box-shadow: -8px -8px 0px 1px $bleuFonce;
}


/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {

}
</style>