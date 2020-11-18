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

<style scoped lang="scss">
#voirProjets {
  margin-top: 7em;
  padding-top: 6%;
  display: flex;
  justify-content: space-around;

  div {
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