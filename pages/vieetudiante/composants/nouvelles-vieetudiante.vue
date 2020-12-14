<template>
  <section id="event-ve">
    <h1 id="titre-event">Nouvelles</h1>
    <img
      src="/medias/images/Rencontre20ans.PNG"
      alt="Évènement 20 ans - Professeur avec anciens élèves"
    />
    <h2 id="nom-event">TIM XX</h2>
    <h2 id="date-event">17 octobre 2019</h2>
    <p id="desc-event">
      On fête les 20 ans du tim! Un évènement spectaculaire où tout les anciens
      étudiants ont été invités pour célébré l'ancinneté du programme TIM!
    </p>
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
#event-ve {
  background-image: linear-gradient($bleu, $fond);
  width: 100%;
  height: 100%;
<<<<<<< HEAD
=======

>>>>>>> c6cf55e7a279c917b8bd214148223524c7f07329
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}

#desc-event {
  font-family: "manrope";
}

#titre-event {
  font-family: "CastIron";
  color: $bleu;
}

img {
  width: 35em;
  height: 25em;
  object-fit: cover;
  margin: 0;
}

/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {
}
</style>