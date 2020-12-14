<template>
  <section id="filtre">
    <div id="tete">
      <!-- SESSION 2 -->
      <section class="session">
        <h1>Session 2</h1>
        <ul uk-accordion class="js-filter">
          <li data-tags="art">
            <h2>Effets spéciaux et animation</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Ce cours permet d'approfondir la formation de l’étudiant en
                matière de traitement d’images en mouvement et de traitement
                sonore. L’étudiant poursuit son apprentissage des techniques de
                prise de vues avec des caméras virtuelles. Il développe sa
                capacité à utiliser des techniques d’effets spéciaux visuels :
                animations graphiques, initiation à l’environnement 3D, caméras
                et lumières virtuelles, composition numérique et techniques
                d’écran vert.
              </p>
              <p>
                L'étudiant est amené à appliquer adéquatement les techniques
                d'optimisation des fichiers sonores et vidéo en fonction de
                différents modes de diffusion et d’intégration à un projet
                multimédia
              </p>
            </div>
          </li>
          <li data-tags="art">
            <h2>Conception graphique et Imagerie vectorielle</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Dans ce cours, l’étudiant poursuit l’apprentissage des notions
                liées à la conception, à la communication graphique et au
                traitement des images fixes vectorielles.
              </p>
              <p>
                L’étudiant développe un concept créatif décliné en plusieurs
                volets. L'étudiant apprend à utiliser la typographie selon les
                règles de l’art. Il a l'opportunité d'approfondir sa maîtrise de
                la communication graphique afin de produire un message adapté au
                public cible.
              </p>
              <p>
                Pour ce faire, le cours aborde la conception d'illustrations et
                des techniques de travail permettant l’intégration harmonieuse
                d’images dans d’autres logiciels multimédias. L'étudiant
                apprendra à créer des agencements graphiques et typographiques
                comme des logos, des icônes web ainsi que des éléments de jeu en
                2D
              </p>
              <p>
                Enfin, l’étudiant est amené à argumenter et justifier ses choix
                créatifs.
              </p>
            </div>
          </li>
          <li data-tags="web prog art">
            <h2>Animation et Interactivité Web</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Ce cours permet à l'étudiant d'acquérir les compétences de base
                requises pour programmer l'interactivité de
                l'interface-utilisateur d'une application multimédia en ligne.
                Les notions abordées dans les cours « 582-1W1 Mise en page Web »
                et « 582-1J1 Animation et interactivité en jeu » sont
                approfondies en les appliquant dans un contexte de création de
                sites Web interactifs, exécutables sur un poste client.
              </p>
              <p>
                L'étudiant apprend à créer et afficher des éléments graphiques
                par programmation et à appliquer des effets de transition et
                d'animation. L'accent est mis sur la gestion d'événements, le
                développement d'interfaces interactives et l'adaptabilité
                multiplateformes. L'étudiant apprend enfin à installer et
                utiliser les outils de développement adéquats pour améliorer sa
                productivité dans le contexte de la chaîne de production Web.
              </p>
            </div>
          </li>
          <li data-tags="prog jeu scena">
            <h2>Création de jeu 2D</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Dans ce cours, l’étudiant approfondit la programmation graphique
                et s’initie aux concepts de base d'un moteur de jeu. Le cours
                permet d'approfondir la maîtrise de la structure d'affichage
                ainsi que le contrôle de l'animation et de l'interactivité.
              </p>
              <p>
                Par la création d'un prototype simple, l'étudiant apprend les
                concepts de base reliés à l'intégration d'un jeu ou d'une
                application interactive en exploitant les principales classes
                intégrées d’objets graphiques et médiatiques et en créant ses
                propres classes d’objets.
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