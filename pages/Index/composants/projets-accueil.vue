<template>
  <section id="voirProjets">
    <div>
      <h2 id="Web">Web</h2>
      <img src="medias/images/projets/web/web.png" alt="Web" />
    </div>
    <div>
      <h2 id="Jeu">Jeu</h2>
      <img src="medias/images/projets/jeu/jeu.png" alt="Jeu" />
    </div>
    <div>
      <h2 id="3D">3D</h2>
      <img src="medias/images/projets/3d.png" alt="3D" />
    </div>
    <router-link to="/projets">
      <button class="boutonNoirGauche">
        <a href="/pages/projets.html">Voir Projets</a>
      </button>
    </router-link>
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

  #Web,
  #Jeu,
  #3D {
    font-size: 2rem;
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
  }
}

// DESKTOP--------------------------------------------------------------------------------------
@media (min-width: 1200px) {
  #voirProjets {
    flex-direction: row !important;
    justify-content: space-between;

    #Web,
    #Jeu,
    #3D {
    position: absolute;
    color: white;
    font-family: "CastIron";
    font-size: 10rem;
    margin: -2% -1%;
    padding: 0.5% 2%;
    background-color: #2cd9ff;
    }

    .boutonNoirGauche {
      width: 10em;
      font-size: 3em;
    }
  }
}
</style>
