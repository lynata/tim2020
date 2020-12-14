<template>
  <section id="filtre">
    <div id="tete">
      <!-- SESSION 4 -->
      <section class="session">
        <h1>Session 4</h1>
        <ul uk-accordion class="js-filter">
          <li data-tags="profess">
            <h2>Gestion de projets multimédias</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Ce cours initie l'étudiant aux rudiments de la gestion d’un
                projet multimédia. L’étudiant apprend à analyser les besoins
                liés à la réalisation du projet en termes de ressources
                humaines, matérielles et budgétaires. À cet effet, il est initié
                aux méthodes de gestion classiques, ainsi qu’aux méthodes dites
                « agiles », qu’il sera appelé à utiliser dans le cadre du cours
                « 582-5W5 : Projet Web en équipe ».
              </p>
              <p>
                L'étudiant est amené à exploiter les fonctions d’un logiciel de
                gestion de projet en vue d’établir un échéancier de production
                et d’en faire le suivi. Le cours couvre également les aspects
                légaux relatifs à la réalisation d’un projet (droits d’auteurs,
                contrats, etc.). Enfin, l’étudiant développe sa capacité à
                écrire ou à répondre à un cahier des charges ainsi qu’à rédiger
                une offre de services professionnels.
              </p>
            </div>
          </li>
          <li data-tags="design prog">
            <h2>Conception d'Interfaces et développement Web</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Dans ce cours, l’étudiant poursuit son apprentissage de
                l’intégration de sites Web dynamiques à l’aide d’un gestionnaire
                de contenu. L’étudiant apprend à développer par programmation
                des thèmes personnalisés pour répondre aux besoins spécifiques
                du design d’interfaces des sites Web. L’étudiant apprend aussi
                les fonctionnalités avancées du gestionnaire de contenu, lui
                permettant entre autres à programmer des extensions servant les
                fonctionnalités des sites Web à développer. De plus, l’étudiant
                est initié à l’utilisation et à l’intégration par programmation
                des bases de données.
              </p>
              <p>
                Ce cours couvre également l’intégration et l’interfaçage entre
                le langage utilisé du côté du serveur et les technologies
                utilisées du côté client. Enfin, l’étudiant poursuit son
                apprentissage des techniques de test pour contrôler la qualité
                d’un site Web et valider sa conformité en regard des normes et
                des standards en vigueur.
              </p>
            </div>
          </li>
          <li data-tags="prog profess scena jeu">
            <h2>Création de jeu en équipe</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Dans ce cours qui s'appuie sur une pédagogie par projets,
                l’étudiant réalise un projet d’envergure en équipe de travail.
                C’est l’occasion pour l’étudiant d’appliquer et d’intégrer
                l’ensemble des compétences acquises afin de réaliser un
                prototype de jeu numérique. Il franchit, en collaboration avec
                les membres de son équipe, toutes les étapes du processus de
                production d’une telle application, qui sont : la conception du
                produit, la planification de sa production, la réalisation et
                l’intégration des médias, la programmation de l’interactivité,
                la réalisation des tests pour contrôler la qualité du produit
                ainsi que la rédaction du guide utilisateur et la présentation
                du produit fini. Par le fait même, ce cours initie l’étudiant à
                la communication interpersonnelle et à l’intégration à une
                équipe de production multimédia.
              </p>
            </div>
          </li>

          <li data-tags="design ">
            <h2>Choix de cours: Interfaces Web réactives et animées</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Dans ce cours, l'étudiant ayant un intérêt plus marqué pour la
                programmation a la possibilité d'approfondir les acquis des
                cours de la séquence Web en s'initiant à des technologies
                permettant de réaliser des applications riches du côté du
                client.
              </p>
              <p>
                Il apprendra à utiliser un cadriciel côté client pour produire
                un site Web dynamique dont l'interface utilisateur réactive
                répond en temps réel aux modifications d'états des données de
                l'application. L’intégration d’effets de transition et
                d'animation dans l’interface-utilisateur est également couverte.
              </p>
            </div>
          </li>
          <li data-tags="scena art ">
            <h2>Choix de cours: Animation 3D</h2>
            <span class="flecheCours uk-accordion-title"> Voir ce cours</span>
            <div class="uk-accordion-content">
              <p>
                Ce cours a pour but de permettre à l’étudiant d’approfondir les
                notions acquises dans le cours « 582-3M5 : Imagerie 3D » et de
                les appliquer dans la création de scènes élaborées. Le cours
                approfondit également les techniques de scénarisation couvertes
                dans les cours précédents.
              </p>
              <p>
                L’étudiant apprend notamment les outils et techniques de
                modélisation organique ainsi que les techniques d’organisation
                des hiérarchies, de montage des systèmes d’articulation et
                d’animation. Enfin, l’étudiant apprend à maîtriser les
                techniques d’optimisation et d’exportation en vue de diffuser
                les productions 3D pour le Web ou pour des applications 3D en
                temps réel.
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