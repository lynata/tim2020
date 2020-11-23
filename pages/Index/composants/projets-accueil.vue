<template>
  <section id="voirProjets">
    <div id="Web">
      <h2 id="TitreWeb">Web</h2>
      <img src="medias/images/projets/web/web.png" alt="Web" />
    </div>
    <div id="Jeu">
      <h2 id="TitreJeu">Jeu</h2>
      <img src="medias/images/projets/jeu/jeu.png" alt="Jeu" />
    </div>
    <div id="3D">
      <h2 id="Titre3D">3D</h2>
      <img src="medias/images/projets/3d.png" alt="3D" />
      <router-link to="/projets">
      <button class="boutonNoirGauche">
        <a href="/pages/projets.html">Voir Projets</a>
      </button>
    </router-link>
    </div>
    
  </section>
</template>

<script>
module.exports = {};
</script>

<style lang="scss" scoped>
//MOBILE---------------------------------------------------------------------------------------

#voirProjets {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 5% 0;

  #TitreWeb,
  #TitreJeu,
  #Titre3D {
    position: absolute;
    color: white;
    font-family: "CastIron";
    font-size: 2rem;
    margin: -2% -1%;
    padding: 0.5% 2%;
    background-color: #2cd9ff;
  }

  .boutonNoirGauche {
    width: 5em;
    font-family: "CastIron";
    font-size: 2em;
  }
}
// TABLETTE----------------------------------------------------------------------------------
@media (min-width: 600px) {
  #voirProjets {
    justify-content: center;
    flex-direction: column;
    margin: 4em auto;

    #TitreWeb,
    #TitreJeu,
    #Titre3D {
      font-size: 15em;
    }
  }
}

// DESKTOP--------------------------------------------------------------------------------------
@media (min-width: 1200px) {
  #voirProjets {
    justify-content: space-around !important;
    flex-direction: row !important;
    margin: 0 !important;
    #Web,
    #Jeu,
    #3D {

      .boutonNoirGauche {
        align-self: center;
        width: 10em;
        font-size: 3em;
      }
    }
  }
}
</style>
