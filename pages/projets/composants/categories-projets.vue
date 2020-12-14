<template>
  <section id="projets">
    <h1 class="titreProjet">Projets</h1>
    <div id="categories">
      <a href="#projetWeb">
        <div>
          <h2 id="titreWeb">Web</h2>
          <img src="medias/images/projets/web/web.png" alt="Web" />
        </div>
      </a>
      <a href="#projetJeu">
        <div>
          <h2 id="titreJeu">Jeu</h2>
          <img src="medias/images/projets/jeu/jeu.png" alt="Jeu" />
        </div>
      </a>
      <a href="#projet3d">
        <div>
          <h2 id="titre3D">3D</h2>
          <img src="medias/images/projets/3d/bruh.jpg" alt="3D" />
        </div>
      </a>
      <a href="#projetVideo">
        <div>
          <h2 id="titreVideo">Vidéo</h2>
          <img src="medias/images/projets/video/lastOtaku.png" alt="Video" />
        </div>
      </a>
      <a href="#projetDesign">
        <div>
          <h2 id="titreDesign">Design</h2>
          <img src="medias/images/projets/design/design.png" alt="Design" />
        </div>
      </a>
    </div>
    <div id="projetWeb">
      <h1 class="titreProjet">Projets Web</h1>
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
    <div id="projetJeu">
      <h1 class="titreProjet">Projets Jeu</h1>
    </div>
    <div key="projet3d">
      <h1 class="titreProjet">Projets 3D</h1>
    </div>
    <div key="projetVideo">
      <h1 class="titreProjet">Projets VidÉo</h1>
    </div>
    <div key="projetDesign">
      <h1 class="titreProjet">Projets Design</h1>
    </div>
  </section>
</template>

<script lang="text/babel">
export default {};
</script>

<style lang='scss'>
/* DEBUT STYLE MOBILE FIRST -------------------------------------------------------------------------------------------------------------------------------------- */
$fond: #101832;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;
$boxNoir: -5px 5px 0px 1px #000;
#projets{
  background-color: $fond;
  .titreProjet{
    background-color: $fond;
    color: $bleu;
    font-family: Castiron;
  }
  #categories{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 2vw;
    a div img{
      width: 100px;
      height: auto;
    }
    #titreWeb,
    #titreJeu,
    #titre3D,
    #titreVideo,
    #titreDesign{
      color: white;
      position: absolute;
      margin-top: 6vw;
      margin-left: 10vw;
      font-family: Manrope;
    }
  }
}

/* FIN STYLE MOBILE FIRST--------------------------------------------------------------------------------------------- */
/*DEBUT TABLETTE    -------------------------------------------------------------------------------------------------------------------------------------- */

@media (min-width: 600px) {
  #categories{
    div img{
      width: 200px !important;
    }
    #titreWeb,
    #titreJeu,
    #titre3D,
    #titreVideo,
    #titreDesign{
      margin-left: 8vw !important;
    }
  }
}

// #categories {
//   position: relative;
//   background-color: $fond;
// }
// #categories {
//   background-color: $fond;
//   #titreProjet{
//     color: $bleu;
//     font-family: Castiron;
//     background-color: $fond;
//   }
//   h2 {
//     position: absolute;
//     color: white;
//     font-family: CastIron;
//     font-size: 5rem;
//     padding: 0;
//     margin: 0;

//   }
//   div {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: nowrap;
//     justify-content: center;
//   }
//   img {
//     width: 60vw;
//   }
// }

/* FIN STYLE MOBILE FIRST--------------------------------------------------------------------------------------------- */
/*DEBUT TABLETTE    -------------------------------------------------------------------------------------------------------------------------------------- */

// @media only screen and (min-width: 600px) {
//   #categories {
//     #projetsWeb {
//       left: 24vw;
//       top: 14vh;
//     }
//     #projetsJeu {
//       top: 14vh;
//       left: 57vw;
//     }
//     #projets3D {
//       left: 80vw;
//       top: 14vh;
//     }
//     img {
//       width: 30vw;
//     }
//     div {
//       flex-direction: row;
//       justify-content: space-around;
//     }
//   }
// }
/* FIN STYLE TABLETTE---------------------------------------------------------------------- */
/* DEBUT STYLE GRAND ECRAN ------------------------------------------------------------------- */
@media (min-width: 1200px) {
}
/* FIN STYLE GRAND ECRAN ------------------------------------------------------------------------ */
</style>