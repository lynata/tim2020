<template>
  <section id="projets">
    <h1 id="titreProjet">Projets</h1>
    <div id="categories">
      <div>
        <h2 id="titreWeb">Web</h2>
        <img src="medias/images/projets/web/web.png" alt="Web" />
      </div>
      <div>
        <h2 id="titreJeu">Jeu</h2>
        <img src="medias/images/projets/jeu/jeu.png" alt="Jeu" />
      </div>
      <div>
        <h2 id="titre3D">3D</h2>
        <img src="medias/images/projets/3d/bruh.jpg" alt="3D" />
      </div>
      <div>
        <h2 id="titreVideo">Vidéo</h2>
        <img src="medias/images/projets/video/lastOtaku.png" alt="Video" />
      </div>
      <div>
        <h2 id="titreDesign">Design</h2>
        <img src="medias/images/projets/design/design.png" alt="Design" />
      </div>
    </div>
    <div id="projetWeb">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
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
  #titreProjet{
    background-color: $fond;
    color: $bleu;
    font-family: Castiron;
  }
  #categories{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div img{
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
    }
  }
}

/* FIN STYLE MOBILE FIRST--------------------------------------------------------------------------------------------- */
/*DEBUT TABLETTE    -------------------------------------------------------------------------------------------------------------------------------------- */

// @media only screen and (min-width: 600px) {
//   #categories{
//     div img{
//       width: 400px;
//     }
//   }
// }

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