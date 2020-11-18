<template>
  <section id="inscription">
        <h2>Inscription</h2>
        <div>
            <a href="https://admission.sram.qc.ca/">Je suis sûr-e!</a>
            <a href="https://www.cmaisonneuve.qc.ca/accueil/venez-rencontrer/etudiant-dun-jour/">Étudiant d'un jour</a>
            <a href="https://www.cmaisonneuve.qc.ca/vie-etudiante/orientation-emploi/choix-de-carriere-orientation/test-dorientation/">Test d'orientation</a>
        </div>
        <img src="medias/images/inscription.png" alt="Inscription">
        <!-- ajouter target="_blank" dans la balise a pour ouvrir le lien sur une autre page -->
    </section>
</template>

<script>
module.exports = {

}
</script>

<style scoped lang="scss">
    #inscription{
        margin: 0;
        padding-top: 5%;
        display: block;

        h2{
            font-family: CastIron;
            color: white;
            font-size: 5em;
            margin-left: 5%;
        }
        
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-around; 
            a{
                font-family: CastIron;
                
                // flex-direction: column;
                border: #2cd9ff 6px solid;
                border-radius: 50px;
                padding: 20px;
                display: block;
            }

            a:hover{
                background-color: #2cd9ff;
                color: black;
            }
        }
        
        // img {
        //     position: absolute;
        // }
    }
</style>