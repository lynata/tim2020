<template>
  <section id="trio">
    <router-link to="/cours">
      <div id="ImgCours">
        <img
          class="uneImage"
          src="medias/images/EleveClasse.PNG"
          alt="Photo d'un élève en classe"
        />
        <button class="transition delay-50 duration-300 ease-in-out boutonNoirGauche boutonCarre Cours"><a>Voir Cours</a></button>
      </div>
    </router-link>
    <router-link to="/profs">
      <div id="ImgProfs">
        <img
          class="uneImage"
          src="medias/images/Rencontre20ans.PNG"
          alt="Photo d'un professeur avec des anciens étudiants"
        />
        <button class="transition delay-50 duration-300 ease-in-out boutonNoirGauche boutonCarre Profs"><a>Voir Profs</a></button>
      </div>
    </router-link>
    <router-link to="/vie-etudiante">
      <div id="ImgVie">
        <img
          class="uneImage"
          src="medias/images/Manette.PNG"
          alt="Manette en main"
        />
        <button class="transition delay-50 duration-300 ease-in-out boutonNoirGauche boutonCarre Vie"><a>Voir La Vie</a></button>
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

  #trio a {
    color: #000000;
    text-decoration: none;
  }
}

/*DEBUT TABLETTE-----------------------------------------------------*/
@media (min-width: 600px) {
  
  .uneImage {
    width: 700px;
    height: 450px;
  }
}

/*DEBUT DESKTOP-----------------------------------------------------*/
@media (min-width: 1200px) {

  #trio {
    margin-top: 3em;
    margin-bottom: 3em;
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
    margin: 5em;
  }

  .boutonCarre {
    position: absolute;
    margin: 10px;
    padding: 0.6em;
    width: 10em;
    text-align: right;
    font-family: "CastIron";
    letter-spacing: 0.2em;
    font-size: 1.5em;
    bottom: 0;
    transition: width 0.2s ease-out, padding 0.2s ease-out, font-size 0.2s ease-out;
  }

  .boutonCarre:hover{
    width: 11em;
    padding: 0.7em;
    font-size: 1.6em;
    transition: width 0.2s ease-in, padding 0.2s ease-in, font-size 0.2s ease-in;
  
  }
  .Cours{
    left:18%;
  }
  .Profs{
    left:51%;
  }
  .Vie{
    left:84%;
  }
  #trio a {
    color: #000000;
    text-decoration: none;
    cursor: default;
  }
}
</style>