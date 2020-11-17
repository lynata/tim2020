<template>
  <section id="inscription">
        <h2>Inscription</h2>
        <div>
            <button><a href="https://admission.sram.qc.ca/">Je suis sûr-e!</a></button>
            <button><a href="https://www.cmaisonneuve.qc.ca/accueil/venez-rencontrer/etudiant-dun-jour/">Étudiant d'un jour</a></button>
            <button><a href="https://www.cmaisonneuve.qc.ca/vie-etudiante/orientation-emploi/choix-de-carriere-orientation/test-dorientation/">Test d'orientation</a></button>
        </div>
        <img src="medias/images/inscription.png" alt="Inscription">
        <!-- ajouter target="_blank" dans la balise a pour ouvrir le lien sur une autre page -->
    </section>
</template>

<script>
module.exports = {

}
</script>

<style scoped>
    #inscription{
        margin: 0;
        padding-top: 5%;
    }

    #inscription div {
        display: flex;
        flex-direction: column;
        float: left;
    }
    #inscription button {
        justify-content: space-evenly; 
    }

    /* #inscription img {
        float: right;
    } */
</style>