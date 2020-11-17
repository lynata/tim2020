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

<style>
    #voirProjets {
      display: flex;
      justify-content: space-around;
      color: white;
    }
    
    #voirProjets div{
        align-items: center;
    }

    #voirProjets div h2 {
        color: white;
    }

    #voirProjets button {
        padding: 0.5em;
        background-color: #2cd9ff;
        box-shadow: #1c2c5c;
    }

    #voirProjets button h3 {
        color: #1c2c5c;
    }

    #voirProjets button a:hover {
        color: #2cd9ff;
    }
</style>