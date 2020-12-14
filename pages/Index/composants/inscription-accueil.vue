<template>
  <section id="inscription">
    <h2 id="TitreInscription">Inscription</h2>
    <div
      id="boutonsInscription"
      uk-scrollspy="target: > a; cls: uk-animation-slide-left; delay: 100; repeat: false"
    >
      <a href="https://admission.sram.qc.ca/" class="boutonArrondi"
        >Je suis sûr-e!</a
      >
      <a
        href="https://www.cmaisonneuve.qc.ca/accueil/venez-rencontrer/etudiant-dun-jour/"
        class="boutonArrondi"
        >Étudiant d'un jour</a
      >
      <a
        href="https://www.cmaisonneuve.qc.ca/vie-etudiante/orientation-emploi/choix-de-carriere-orientation/test-dorientation/"
        class="boutonArrondi"
        >Test d'orientation</a
      >
    </div>
    <!-- ajouter target="_blank" dans la balise a pour ouvrir le lien sur une autre page -->
  </section>
</template>

<script lang="text/babel">
export default {};
</script>

<style  lang="scss" scoped>
//MOBILE FIRST----------------------------------------------------------------------
#inscription {
  width: 100%;
  height: 50%;
  margin: 5% 0;
  display: block;
  background-image: url("/../medias/images/inscription.png");
  background-repeat: no-repeat;
  background-position: 95%;
  background-size: 80%;

  #TitreInscription {
    font-family: "CastIron";
    color: white;
    font-size: 2em;
    margin-left: 5%;
  }

  .boutonArrondi {
    margin: 0.5em;
    padding: 0.9em;
    font-size: 0.5em;
  }
}

// DEBUT TABLETTE--------------------------------------------------------------------
@media (min-width: 600px) {
}

//DEBUT DESKTOP----------------------------------------------------------------------
@media (min-width: 1200px) {
  #TitreInscription {
    font-size: 5em !important;
  }

  #boutonsInscription {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5%;
    .boutonArrondi {
      font-size: 0.8em !important;
      display: block;
    }

    .boutonArrondi:nth-child(1) {
      transition: width 0.2s ease-out;
      width: 14%;
    }
    .boutonArrondi:nth-child(2) {
      transition: width 0.2s ease-out;
      width: 28%;
    }
    .boutonArrondi:nth-child(3) {
      transition: width 0.2s ease-out;
      width: 20%;
    }

    .boutonArrondi:nth-child(1):hover {
      transition: width 0.2s ease-in;
      width: 18%;
    }
    .boutonArrondi:nth-child(2):hover {
      transition: width 0.2s ease-in;
      width: 32%;
    }
    .boutonArrondi:nth-child(3):hover {
      transition: width 0.2s ease-in;
      width: 25%;
    }
  }
}
</style>