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
      <a href="#projetImg">
        <div>
          <h2 id="titreImg">Imagerie</h2>
          <img src="medias/images/projets/img/illustra.png" alt="Illustration/Image" />
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
    <div id="projetTout">
      <h1 class="titreProjet">Projets Web</h1>
      <div id="projetWeb">
        <img src="medias/images/projets/web/web.png" alt="web1">
        <img src="medias/images/projets/web/georges.png" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <h1 class="titreProjet">Projets Jeu</h1>
      <div id="projetJeu">
        <img src="medias/images/projets/jeu/jeu.png" alt="jeu1">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <h1 class="titreProjet">Projets 3D</h1>
      <div id="projet3d">
        <img src="medias/images/projets/3d/bruh.jpg" alt="3d1">
        <img src="medias/images/projets/3d/alesExTete2.png" alt="">
        <img src="medias/images/projets/3d/Aster2.png" alt="">
        <img src="medias/images/projets/3d/BoudriasGaboriau_Philippe_tp1.jpeg" alt="">
        <img src="medias/images/projets/3d/DaoustMaxime_portal_gun.jpeg" alt="">
        <img src="medias/images/projets/3d/Ducharme.pjg" alt="">
      </div>
      <h1 class="titreProjet">Projets Image numÉrique</h1>
      <div id="projetImg">
        <img src="medias/images/projets/img/illustra.png" alt="img1">
        <img src="medias/images/projets/img/nutella.jpg" alt="nutella">
        <img src="medias/images/projets/img/PatryClaudiaTP2.jpg" alt="Van Goghhhh">
        <img src="medias/images/projets/img/Patry_Anim_TP2A.png" alt="horns">
        <img src="medias/images/projets/img/Patry_TP1_Logo_web.png" alt="cowjs">
      </div>
      <h1 class="titreProjet">Projets VidÉo</h1>
      <div id="projetVideo">
        <img src="medias/images/projets/video/lastOtaku.png" alt="vid1">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <h1 class="titreProjet">Projets Design</h1>
      <div id="projetDesign">
        <img src="medias/images/projets/design/design.png" alt="">
        <img src="medias/images/projets/design/ClaudiaFin.jpg" alt="">
        <img src="medias/images/projets/design/claudiaFinal.jpg" alt="">
        <img src="medias/images/projets/design/claudiaS1.jpg" alt="">
        <img src="medias/images/projets/design/claudiaS2.jpg" alt="">
        <img src="medias/images/projets/design/claudiaS3.jpg" alt="">
        <img src="medias/images/projets/design/claudiaS4.jpg" alt="">
      </div>
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
      height: 70px;
    }
    #titreWeb,
    #titreJeu,
    #titreImg,
    #titre3D,
    #titreVideo,
    #titreDesign{
      color: white;
      position: absolute;
      // margin-top: 6vw;
      // margin-left: 8vh;
      margin: 0 7vw auto 0;
      font-family: Manrope;
      background-color: $bleu;
      font-size: medium;
    }
  }
  #projetTout{
    // display: flex;
    // flex-wrap: nowrap;
    #projetWeb,
    #projetJeu,
    #projet3d,
    #projetImg,
    #projetVideo,
    #projetDesign{
      margin-top: 5vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      img{
        max-width: 150px;
        max-height: 150px;
        padding: 2vh;
      }
    }
  }
}

/* FIN STYLE MOBILE FIRST--------------------------------------------------------------------------------------------- */
/*DEBUT TABLETTE    -------------------------------------------------------------------------------------------------------------------------------------- */

@media (min-width: 600px) {
  #categories{
    div img{
      width: 200px !important;
      height: 150px !important;
    }
    #titreWeb,
    #titreJeu,
    #titre3D,
    #titreImg,
    #titreVideo,
    #titreDesign{
      margin-left: 8vw !important;
      font-size: 3vh !important;
    }
    #projetTout{
      #projetWeb,
      #projetJeu,
      #projet3d,
      #projetImg,
      #projetVideo,
      #projetDesign{
        img{
          max-width: 300px !important;
          max-height: 300px !important;
        }
      }
    }
  }
}

/* FIN STYLE TABLETTE---------------------------------------------------------------------- */
/* DEBUT STYLE GRAND ECRAN ------------------------------------------------------------------- */
@media (min-width: 1200px) {
  #projetTout{
    #projetWeb,
    #projetJeu,
    #projet3d,
    #projetImg,
    #projetVideo,
    #projetDesign{
      img{
        max-width: 400px !important;
        max-height: 400px !important;
      }
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