<template>
  <section id="info-ve">
    <div id="info">
      <h1 id="titre-info">Vie Étudiante</h1>
      <p id="desc-info">
        Plusieurs locaux sont à la disposition des étudiant-e-s pour épanouir
        leurs créativiées et projets personnels. La technique d’intégration
        multimédia est plus qu’être étudiant-e-s et professeur-e-s. À chaque
        pause commune, le centre d’aide ouvre leur porte pour accueillir les
        étudiant-e-s pour avancer sur leurs travaux.
      </p>
    </div>
  </section>
</template>

<script lang="text/babel" scoped>
export default {};
</script>

<style lang="scss" scoped>
$fond: #090c16;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;

/* MOBILE FIRST--------------------------------------------------------------------------------------------- */
#info-ve {
  background-image: linear-gradient($fond, $bleu);
  display: flex;
  justify-content: center;
}
#info {
  background-color: $blanc;
  width: 90vw;
  box-shadow: $boxBleu;
  margin: 4em 0 2em 1em;
  padding: 1em;
}

#titre-info {
  font-family: "CastIron";
  color: $bleu;
}


#desc-info{
  font-family: 'manrope';
  color: $blanc;
}


/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {
  #info {
    background-color: #0000;
    width: 70vw;
    box-shadow: $boxBleu;
    margin: 4em 0 2em 1em;
    padding: 2em;
  }
}
</style>