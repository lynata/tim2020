<template>
  <section id="filtre">
    <div id="tete">
      <!-- SESSION 6-->
      <section class="session">
        <h1>Session 6</h1>
        <ul uk-accordion class="js-filter">
          <li>
            <h2>Stage</h2>
            <span class="flecheCours uk-accordion-title">Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Le stage en entreprise complète la formation de l’étudiant en
                lui permettant d'intégrer et de mettre en application ses
                différents acquis dans le milieu professionnel.
              </p>
              <p>
                L’étudiant joint une véritable équipe de travail en multimédia,
                ce qui lui permet également de réaliser une synthèse de ses
                compétences par la réalisation de mandats concrets et réels et
                de tâches spécifiques visant à répondre aux besoins de
                l’entreprise et de ses clients.
              </p>
            </div>
          </li>

          <li>
            <h2>Projet de fin d'études</h2>
            <span class="flecheCours uk-accordion-title">Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Ce cours permet à l’étudiant de se spécialiser dans un domaine
                de son choix par le biais d’un projet de recherche en multimédia
                qu'il a identifié à la session précédente, dans le cours «
                393-5E1 Méthodes de recherche et préparation au marché du
                travail ».
              </p>
              <p>
                L'étudiant planifie son projet de recherche, vérifie sa
                faisabilité sur le plan technique et le réalise. Par la suite,
                il doit concevoir et réaliser une production multimédia qui
                présente les résultats de son projet de recherche. La
                réalisation et la présentation de cette production multimédia
                constituent l'Épreuve synthèse de programme (ÉSP). À travers
                l'ÉSP, l'étudiant doit démontrer qu'il a atteint les compétences
                artistiques et techniques attendues d'un intégrateur multimédia
                et qu’il a les attitudes nécessaires à son intégration sur le
                marché du travail.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script lang="text/babel">
export default {
};
</script>

<style lang="scss" scoped>
$fond: #090c16;
$bleuFond: #090c16;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;
$boxNoir: -5px 5px 0px 1px #000;
.session {
  position: relative;
  font-family: "ManRope";
  background-color: $bleuFond;
  .coursPopup {
    position: absolute;
    background-color: $bleuFond;
    width: 50%;
    top: -1em;
    left: 25%;
    padding: 1em 2em;
    color: #fff;
    li {
      background-color: $bleuFond;
      box-shadow: none;
      color: #fff;
    }
  }
  li {
    background-color: $blanc;
    box-shadow: $boxNoir;
    margin: 1em;
  }
  // h2{
  //   color: $bleu;
  //   font-family: Castiron;
  // }
  .choix {
    font-family: Castiron;
    color: $bleu;
  }
}

#filtre {
  // margin-top: 30%;
  background-color: $fond;
  h1 {
    font-family: Castiron;
    color: $bleu;
    font-size: 6vw;
    margin-left: 1.5vw;
  }
  #btnFiltre {
    // margin-top: 15vh;
    background-color: $fond;
    display: flex;
    justify-content: center;
    li {
      // display: flex;
      // justify-content: center;
      a {
        // font-size: 5vw;
        background-color: rgb(209, 209, 209);
        color: black;
        width: 5vw;
        border-radius: 15px;
        margin: 0 1vw;
        display: flex;
        justify-content: center;
      }

      a:hover,
      a:target {
        color: $bleu;
      }

      a:nth-child(1) {
        font-size: 1.5vw;
        font-family: Manrope;
        font-weight: bold;
      }
    }
  }

  // #sess1 {
  //   margin: 2vw;
  //   h2 {
  //     font-family: Castiron;
  //     font-size: 5vw;
  //     color: white;
  //   }
  //   li {
  //     width: 100%;
  //     background-color: rgb(209, 209, 209);
  //     margin: 0;
  //     border: black 1px solid;
  //     padding: 2vw;
  //     font-family: Manrope;
  //   }
  // }

  //  #tete{
  //     position: fixed;
  //     border: solid red 1px;
  //   }
}

// Desktop
@media (min-width: 1200px) {
  #filtre {
    // margin-top: 0 !important;
    #btnFiltre {
      margin: 0;
      li {
        a:nth-child(1) {
          font-size: 0.5vw;
          // font-family: Manrope;
          // font-weight: bold;
        }
      }
      a:hover,
      a:target {
        color: $bleu;
      }
    }
    #sess1 {
      h2 {
        font-size: 3vw;
      }
    }
  }
}
</style>