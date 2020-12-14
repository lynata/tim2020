<template>
  <section id="filtre">
    <div id="tete">
      <h1>Cours</h1>

        <!-- SESSION 1 -->
        <section class="session">
          <h1>Session 1</h1>
          <ul uk-accordion class="js-filter">
            <li data-tags="scena">
              <h2>Création vidéo</h2>
              <span class="flecheCours uk-accordion-title"
                >Voir ce cours</span>
                <div class="uk-accordion-content">
            <p>Ce cours initie l’étudiant au traitement des images en mouvement, au
        traitement du son ainsi qu'aux bases de la scénarisation linéaire.</p>
       <p> L’étudiant apprend à utiliser les périphériques associés au traitement
        du son et de la vidéo et à exploiter de façon créative les fonctions des
        logiciels de traitement vidéo et sonore. Les techniques de montage
        (structure narrative, affinage de coupe, correction de couleur, etc.)
        sont étudiées. L’étudiant apprend à représenter ses idées et ses
        concepts par le dessin et l’écrit, à l’aide de scénarimages, de synopsis
        et de scénarios. Les particularités de la fonction de travail liées au
        traitement de la vidéo, du son, ainsi qu'à la scénarisation sont
        présentées de même que les compétences techniques et comportementales
        associées.</p>
        </div>
            </li>
            <li data-tags="art">
              <h2>Conception graphique et Imagerie matricielle</h2>
              <span class="flecheCours uk-accordion-title">Voir ce cours</span>
                <div class="uk-accordion-content">
                  <p>Ce cours initie l'étudiant aux rudiments de la conception et de la communication graphique ainsi qu'au traitement des images fixes matricielles. On y aborde les notions de base sur le langage graphique, la couleur, le mode d’organisation picturale en lien avec le design d’une image ou d’une interface. L’apprentissage d’un processus de conception structuré et de techniques d’idéation permet à l’étudiant de faire émerger des concepts créatifs respectant des objectifs de communication précis et le public cible.</p>
                  <p>L'étudiant est amené à exploiter de façon créative et efficace les diverses fonctions d’un logiciel de traitement de l'image numérique, à utiliser des techniques de montage et de découpage d’images et à appliquer des effets spéciaux diversifiés. Le cours aborde plus particulièrement les notions de photoréalisme ainsi que des techniques de travail permettant l’intégration harmonieuse d’images dans d’autres logiciels multimédias. De plus, les méthodes de travail pour la réalisation de maquettes graphiques d’un document multimédia sont abordées.</p>
                  <p>Les particularités de la fonction de travail liées au design graphique et au traitement des images fixes sont présentées, de même que les compétences techniques et comportementales associées.</p>
                </div>
            </li>
            <li data-tags="web prog">
              <h2>Mise en page web</h2>
              <span class="flecheCours uk-accordion-title">
                Voir ce cours</span>
                <div class="uk-accordion-content">
                  <p>Dans ce cours, l'étudiant apprend les techniques de mise en page Web en utilisant les langages de balisage et de feuilles de styles. L’étudiant apprend également à analyser et schématiser l’arborescence d’un site Web, à reproduire des maquettes sous forme de pages Web, et à créer des pages Web en intégrant les différents types de médias. L’introduction à un outil de gestion de code source est également couverte dans ce cours.</p>
                  <p>Les particularités de la fonction de travail associées au domaine du Web sont présentées, de même que les compétences techniques et comportementales associées.</p>
                </div>
            </li>
            <li data-tags="jeu prog art">
              <h2>Animation et interactivité en jeu</h2>
              <span class="flecheCours uk-accordion-title">
                Voir ce cours</span>
                <div class="uk-accordion-content">
                  <p>Ce cours est consacré aux concepts de base nécessaires à la création d’un jeu numérique. Le cours porte, d’une part, sur l’animation des médias : l’étudiant y apprend à importer et à intégrer des médias dans un environnement de création de jeu. De plus, il se familiarise avec les techniques de création d’animations à partir d’images simples et des feuilles de « sprites ». D’autre part, le cours couvre la gestion des interactions : l’étudiant y est initié aux concepts de base de l’interactivité dans un contexte de jeu, ainsi qu’aux techniques de conception, de codification et de vérification des algorithmes nécessaires à cette fin.</p>
                  <p>Dans ce cours, l’étudiant est également initié à l’environnement matériel et technologique dans lequel il évoluera tout au long de sa formation et de sa carrière. Les particularités de la fonction de travail liées au domaine du jeu sont présentées, de même que les compétences techniques et comportementales associées.</p>
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