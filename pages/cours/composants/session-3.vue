<template>
  <section id="filtre">
    <div id="tete">
      <section class="session">
        <h1>Session 3</h1>
        <ul uk-accordion class="js-filter">
          <li data-tags="art">
            <h2>Imagerie 3D</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Dans ce cours, l’étudiant est initié au monde de l’imagerie de
                synthèse. Il est amené à maîtriser les outils et les
                fonctionnalités de base d’un logiciel de production 3D pour la
                création d'images fixes (ex : interface graphique, logo ou
                autres objets).
              </p>
              <p>
                Il apprend les techniques et méthodes de travail liées à la
                modélisation, à la création et à l’application de matériaux et
                de textures ainsi qu’aux techniques d’éclairage et de rendu en
                image. Enfin, des principes de scénarisation liés à l’univers de
                la 3D sont également abordés.
              </p>
            </div>
          </li>
          <li data-tags="design">
            <h2>Design d'interactivité</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                L’étudiant apprend à concevoir des expériences interactives en
                plaçant les besoins de l’utilisateur au cœur de sa création.
              </p>
              <p>
                Ce cours transpose les techniques de conception et de
                communication graphique dans l’univers de l’interactivité.
                L’étudiant apprend à concevoir les éléments d’une interface
                multimédia, notamment en ce qui a trait au design de la
                navigation et de l’interactivité. Il apprend également les
                méthodes pour intégrer l’expérience utilisateur dans ses projets
                multimédias.
              </p>
              <p>
                Ce cours développe chez l’étudiant la capacité de communiquer
                efficacement à l’utilisateur d’un produit multimédia en fonction
                de ses besoins, et ce, dans le respect des normes
                d’utilisabilité et d’accessibilité en vigueur dans l’industrie.
              </p>
              <p>
                Différents types de produits sont mis en valeur tout au long de
                l’apprentissage, notamment par la création d’interfaces Web
                faisant appel aux langages de balisage et aux feuilles de
                styles. L’étudiant approfondit le développement de sa capacité
                d’analyse et ses compétences à présenter sa création.
              </p>
            </div>
          </li>
          <li data-tags="prog">
            <h2>Création de sites Web dynamiques</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Dans ce cours, les notions acquises dans les cours « 582-1W1 :
                Mise en page Web » et « 582-2W2 : Animation et interactivité Web
                » sont approfondies et complétées par des aspects plus avancés,
                propres à la génération dynamique de pages Web. L’étudiant est
                d’abord initié à la programmation HTTP de base. Utilisant un
                langage de programmation, il apprend à traiter les paramètres et
                entêtes d’une requête HTTP pour générer de façon dynamique la
                réponse HTTP. De plus, l’étudiant apprend à utiliser la
                librairie de fonctions essentielles du langage de programmation
                pour développer un site Web.
              </p>
              <p>
                Ensuite, l’étudiant apprend à intégrer un site Web dynamique à
                l’aide d’un gestionnaire de contenu. Pour ce faire, l’étudiant
                apprend à utiliser les fonctionnalités de base du gestionnaire
                de contenu. Il apprend aussi à adapter et personnaliser les
                interfaces à partir de thèmes, le tout en appliquant les
                apprentissages des cours « 582-1W1 : Mise en page Web », «
                582-2W2 : Animation et interactivité Web » et « 582-3C1 : Design
                d’interactivité » afin de produire des sites Web dont les
                interfaces suivent les meilleures pratiques de l’utilisabilité
                et de l’adaptabilité Web. Enfin, l'étudiant poursuit son
                apprentissage d’un environnement de travail collaboratif.
              </p>
            </div>
          </li>
          <li data-tags="prog jeu scena">
            <h2>Création de jeu 3D</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Ce cours permet à l'étudiant d'intégrer différents types de
                médias à l'aide des fonctionnalités d'un logiciel d'intégration
                3D. L'étudiant est amené à contrôler et à animer les éléments
                d'une application multimédia par programmation dans un
                environnement 3D.
              </p>
              <p>
                Ce cours initie l’étudiant à l’utilisation d’un environnement
                d’intégration de la 3D en temps réel. L’accent est d’abord mis
                sur l’apprentissage des notions de base de la 3D-temps réel et
                de l’intégration 3D (systèmes de coordonnées, vecteurs, types et
                propriétés d’objets 3D, caméra, rendu en temps réel, etc.).
              </p>
              <p>
                Ensuite l’étudiant est amené à maîtriser les outils et les
                fonctionnalités de base d’un logiciel d’intégration 3D, afin
                d'importer et prendre en charge des éléments 3D, paramétrer les
                comportements ainsi que programmer l’interactivité.
              </p>
              <p>
                Enfin, par la création d’un prototype simple, l’étudiant est à
                même d’apprendre les concepts et les techniques de base reliées
                à l’intégration d’un jeu numérique.
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