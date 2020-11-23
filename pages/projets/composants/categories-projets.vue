<template>
  <section id="categories">
    <div>
      <h2 id="projetsWeb">Web</h2>
      <img src="medias/images/projets/web/web.png" alt="Web" />

      <h2 id="projetsJeu">Jeu</h2>
      <img src="medias/images/projets/jeu/jeu.png" alt="Jeu" />

      <h2 id="projets3D">3D</h2>
      <img src="medias/images/projets/3d/bruh.jpg" alt="3D" />
    </div>
  </section>
</template>

<script>
module.exports = {};
</script>

<style lang='scss'>
/* DEBUT STYLE MOBILE FIRST -------------------------------------------------------------------------------------------------------------------------------------- */
#categories {
  position: relative;
}
#categories {
  h2 {
    position: absolute;
    color: white;
    font-family: CastIron;
    font-size: 5rem;
    padding: 0;
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
  }
  img {
    width: 60vw;
  }
}

/* FIN STYLE MOBILE FIRST--------------------------------------------------------------------------------------------- */
/*DEBUT TABLETTE    -------------------------------------------------------------------------------------------------------------------------------------- */

@media only screen and (min-width: 600px) {
  #categories {
    #projetsWeb {
      left: 24vw;
      top: 14vh;
    }
    #projetsJeu {
      top: 14vh;
      left: 57vw;
    }
    #projets3D {
      left: 80vw;
      top: 14vh;
    }
    img {
      width: 30vw;
    }
    div {
      flex-direction: row;
      justify-content: space-around;
    }
  }
}
/* FIN STYLE TABLETTE---------------------------------------------------------------------- */
/* DEBUT STYLE GRAND ECRAN ------------------------------------------------------------------- */
@media (min-width: 1200px) {
}
/* FIN STYLE GRAND ECRAN ------------------------------------------------------------------------ */
</style>