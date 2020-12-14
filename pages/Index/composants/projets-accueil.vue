<template>
  <section
    id="voirProjets"
    uk-scrollspy="cls: uk-animation-slide-bottom-small; target: div; delay: 100; repeat: false"
  >
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

<script lang="text/babel">
export default {};
</script>

<style lang="scss" scoped>
//MOBILE---------------------------------------------------------------------------------------

//not done
// #voirProjets{
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   #Web{
//     display: none;
//   }
//   #TroisD{
//     display: none;
//     #Titre3D{
//       display: block;
//     }
//   }
//   #Jeu{
//     margin-top: 15%;
//     margin-bottom: 15%;
//     // display: flex;
//       #imgJeu{
//       width: 300px;
//       margin-left: auto;
//       margin-right: auto;
//     }
//     #TitreJeu{
//       display: none;
//     }
//   }
//   #voirProj{
//     position: absolute;
//     border: solid red 1px;
//     left: 40%;
//     bottom: 0.5%;
//   }
// }

// // TABLETTE----------------------------------------------------------------------------------
// @media (min-width: 600px) {
//   #voirProjets {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     #Web{
//       margin: 0;
//       display: block !important;
//       border: 1px solid red;
//       #imgWeb{
//         margin: 5% auto 0;
//         width: 600px;
//       }
//     }
//     #TroisD{
//       margin: 0;
//       display: block !important;
//       border: 1px solid red;
//       #img3d{
//         margin: 0 auto;
//         width: 600px;
//       }
//     }
//     #Jeu{
//       margin: auto;
//       padding: 0;
//       border: 1px solid red;
//       #imgJeu{
//         width: 600px !important;
//         margin: 0 auto;
//       }
//       #TitreJeu{
//         display: block !important;
//       }
//     }
//   }
// }

#voirProjets {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20% 0;

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
    margin: 0;
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
