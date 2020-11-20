<template>
  <section id="inscription">
        <h2>Inscription</h2>
        <img src="medias/images/inscription.png" alt="Inscription">
        <div>
            <a href="https://admission.sram.qc.ca/" class="boutonArrondi">Je suis sûr-e!</a>
            <a href="https://www.cmaisonneuve.qc.ca/accueil/venez-rencontrer/etudiant-dun-jour/" class="boutonArrondi">Étudiant d'un jour</a>
            <a href="https://www.cmaisonneuve.qc.ca/vie-etudiante/orientation-emploi/choix-de-carriere-orientation/test-dorientation/" class="boutonArrondi">Test d'orientation</a>
        </div>
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
        
        img {
            position: absolute;
            right: 0;
            padding-bottom: 5%;
            // border: red 1px solid;
        }
        
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-around; 
            a{
                font-family: CastIron;
                margin-left: 5%;
                background-color: #101832;
                border: #2cd9ff 6px solid;
                border-radius: 50px;
                padding: 10px;
                display: block;
                font-size: 2em;
                z-index: 2;
            }
            a:nth-child(1){
                width: 20%;
                margin-bottom: 1%;
            }
            a:nth-child(2){
                width: 40%;
                margin-bottom: 1%;
            }
            a:nth-child(3){
                width: 30%;
            }

            a:hover{
                background-color: #2cd9ff;
                color: black;
            }
        }
    }
</style>