<template>
   <section id="voirProjets">
        <div>
            <h2>Web</h2>
            <img src="medias/images/web.png" alt="Web">
        </div>
        <div>
            <h2>Jeu</h2>
            <img src="medias/images/jeu.png" alt="Jeu">
        </div>
        <div>
            <h2>3D</h2>
            <img src="medias/images/3d.png" alt="3D">
        </div>
        <button><a href="/pages/projets.html"><h3>Voir Projets</h3></a></button>
    </section>
</template>

<script>
module.exports ={

}
</script>

<style scoped lang="scss">

    #voirProjets{
        padding-top: 6%;
        display: flex;
        justify-content: space-around;

        div{
            display: flex;
            flex-direction: row-reverse;
            
            h2 {
                position: absolute;
                color: white;
                font-family: CastIron;
                font-size: 5rem;
                margin: -2% -1%;
                padding: 0.5% 2%;
                background-color: #2cd9ff;
                /* z-index: 0; */
            }
        }
        button {
            // border: red 1px solid;
            padding: 0 2rem;
            background-color: #2cd9ff;
            box-shadow: #1c2c5c;
            
            h3 {
                font-family: CastIron;
                font-size: 2rem;
                color: #1c2c5c;
            }
            button:hover {
                color: #2cd9ff;
            }
        }
    }
</style>