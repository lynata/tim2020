<template>
  <section id="trio">
    <router-link to="/cours">
      <div id="ImgCours">
        <img
          class="uneImage"
          src="medias/images/EleveClasse.PNG"
          alt="Photo d'un élève en classe"
        />
        <button class="transition delay-50 duration-300 ease-in-out boutonNoirGauche boutonCarre"><a>Voir Cours</a></button>
      </div>
    </router-link>
    <router-link to="/profs">
      <div id="ImgProfs">
        <img
          class="uneImage"
          src="medias/images/Rencontre20ans.PNG"
          alt="Photo d'un professeur avec des anciens étudiants"
        />
        <button class="transition delay-50 duration-300 ease-in-out boutonNoirGauche boutonCarre"><a>Voir Profs</a></button>
      </div>
    </router-link>
    <router-link to="/vie-etudiante">
      <div id="ImgVie">
        <img
          class="uneImage"
          src="medias/images/Manette.PNG"
          alt="Manette en main"
        />
        <button class="transition delay-50 duration-300 ease-in-out boutonNoirGauche boutonCarre"><a>Voir La Vie</a></button>
      </div>
    </router-link>
  </section>
</template>

<script>
module.exports = {};
</script>

<style lang='scss' scoped>
/*MOBILE FIRST-----------------------------------------------------*/
#trio {
  #imgCours,
  #imgProfs,
  #imgVie {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .uneImage {
    float: center;
    width: 500px;
    height: 250px;
    object-fit: cover;
    margin: 0;
  }

  a {
    color: #000000;
    text-decoration: none;
  }
}

/*DEBUT TABLETTE-----------------------------------------------------*/
@media (min-width: 600px) {
  #imgCours,
  #imgProfs,
  #imgVie {
  }
  .uneImage {
    width: 700px;
    height: 450px;
    object-fit: cover;
    margin: 0;
  }
}

/*DEBUT DESKTOP-----------------------------------------------------*/
@media (min-width: 1200px) {
  #trio {
    margin-top: 3em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  #imgCours,
  #imgProfs,
  #imgVie {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .uneImage {
    float: center;
    width: 450px !important;
    height: 700px !important;
    object-fit: cover;
    margin: 5em;
  }

  .boutonCarre {
    position: absolute;
    margin: 10px;
    padding: 0.6em;
    width: 10em;
    text-align: right;
    font-family: CastIron;
    letter-spacing: 0.2em;
    font-size: 1.5em;
    bottom: 0;
  }

  #trio a {
    color: #000000;
    text-decoration: none;
    cursor: default;
  }
}
</style>