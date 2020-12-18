<template>
  <section id="nouv-ve">
    <h1 id="titre-nouv">Nouvelles</h1>
    <img
      src="/medias/images/Rencontre20ans.PNG"
      alt="Évènement 20 ans - Professeur avec anciens élèves"
    />
    <h2 id="nom-nouv">TIM XX</h2>
    <h2 id="date-nouv">17 octobre 2019</h2>
    <p id="desc-nouv">
      On fête les 20 ans du tim! Un évènement spectaculaire où tout les anciens
      étudiants ont été invités pour célébré l'ancienneté du programme TIM!
    </p>
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
#nouv-ve {
  background-image: url("/medias/images/halfTone/HalftoneClean.png");
  background-size: 17em;
  background-repeat: repeat-x;
  background-color: $fond;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#titre-nouv, #nom-nouv, #date-nouv{
  font-family: "CastIron";
  margin:0;
}

#titre-nouv{
  color: $blanc;
  font-size: 3.5em;
}

#nom-nouv{
  color: $bleu;
  font-size: 3.5em;  
}

#date-nouv{
  color: $bleu;
  font-size: 2.5em;
}

#desc-nouv {
  font-family: "manrope";
  text-align: justify;
  color: $blanc;
  padding: 1.5em;
  margin:0;
}

img {
  width: 27em;
  height: 17em;
  object-fit: cover;
  margin: 0;
  box-shadow: 8px 8px 0px 1px $bleu;
}

/* VERSION DESKTOP------------------------------------------------------------------------------------------ */
@media (min-width: 1200px) {

}
</style>
