<template>
  <section id="voirProjets">
    <div>
      <h2>Web</h2>
      <img src="medias/images/projets/web/web.png" alt="Web" />
    </div>
    <div>
      <h2>Jeu</h2>
      <img src="medias/images/projets/jeu/jeu.png" alt="Jeu" />
    </div>
    <div>
      <h2>3D</h2>
      <img src="medias/images/projets/3d.png" alt="3D" />
    </div>
    <router-link to="/projets">
      <button>
        <a href="/pages/projets.html"><h3>Voir Projets</h3></a>
      </button>
    </router-link>
  </section>
</template>

<script>
module.exports = {};
</script>

<style  lang="scss" scoped>
//MOBILE
//   #voirProjets {
//   // margin-top: 5em;
//   // display: flex;
//   justify-content: center;

  div {
    // display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5% 0;

    h2 {
      position: absolute;
      color: white;
      font-family: CastIron;
      font-size: 5rem;
      margin: -2% -1%;
      padding: 0.5% 2%;
      background-color: #2cd9ff;
    }
  }
  button {
    display: absolute;
    padding: 1rem 4rem;
    background-color: #2cd9ff;
    box-shadow: #1c2c5c;
    // margin-top: 100%;
    right: 0;
  }

    h3 {
      font-family: CastIron;
      font-size: 2rem;
      color: #1c2c5c;
      margin: 0;
    }
    
  
  button:hover {
    background-color: #1c2c5c;
    color: white;
  }
// }

// TABLETTE
@media (min-width: 600px) {
  #voirProjets {
  // margin-top: 5em;
  // display: flex;
  justify-content: center;

  div{
    flex-direction: column;
    margin: 4em auto;

      h2 {
        position: absolute;
        color: white;
        font-family: CastIron;
        font-size: 5rem;
        margin: -2% -1%;
        padding: 0.5% 2%;
        background-color: #2cd9ff;
        // right: 0;
      }
    } 
    button {
      display: absolute;
      padding: 1rem 5rem;
      background-color: #2cd9ff;
      box-shadow: #1c2c5c;
      right: 0;
      margin: auto;

      h3 {
        font-family: CastIron;
        font-size: 2rem;
        color: #1c2c5c;
        margin: 0;
      }
    }
    button:hover {
      background-color: #1c2c5c;
      color: white;
    }
  }
}

// DESKTOP
@media (min-width: 1200px) {
  #voirProjets {
  // margin-top: 5em;
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: row;

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
    display: absolute;
    padding: 1rem 4rem;
    background-color: #2cd9ff;
    box-shadow: #1c2c5c;
    margin-top: 100%;

    h3 {
      font-family: CastIron;
      font-size: 2rem;
      color: #1c2c5c;
      margin: 0;
    }
    
  }
  button:hover {
    background-color: #1c2c5c;
    color: white;
  }
  }
}
</style>