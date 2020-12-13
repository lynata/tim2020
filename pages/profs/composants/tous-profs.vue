<template>
  <section id="tousProfs">
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <ul id="listeProfs"></ul>
    <!-- Les reste a afficher dynamiquement -->
    <!-- <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Manon.jpg" alt="Manon" />Manon
        Bertrand</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Eddy.jpg" alt="" />Eddy Martin</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Ahmed.jpeg" alt="" />Ahmed
        Boudjani</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Denis.jpg" alt="" />Denis
        Pellerin</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Dominic.jpg" alt="" />Dominic
        Girard</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Greg.jpg" alt="" />GrÉgory Bony</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Johanne.jpg" alt="" />Johanne
        MassÉ</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Martin.jpg" alt="" />Martin
        St-Pierre</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Mathieu.jpg" alt="" />Mathieu
        Dionne</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Vahik.jpg" alt="" />Vahik
        Toroussian</a
      >
    </div>
    <div>
      <a href="#"
        ><img src="/medias/images/Professeurs/Vincent.jpg" alt="" />Vincent
        Leblanc</a
      >
    </div> -->
  </section>
</template>


<script>
</script>

<style lang='scss' scoped>
$fond: #101832;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;
$boxNoir: -5px 5px 0px 1px #000;
section {
  background-color: $fond;
}

html {
  background-color: $fond;
}

#tousProfs {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin: 0.5em 1em;
    text-align: center;
  }

  img {
    width: 10em;
    height: 10em;
    object-fit: cover;
    overflow: hidden;
    -webkit-box-shadow: -5px 5px 0px 2px $bleu;
    box-shadow: -5px 5px 0px 2px $bleu;
    filter: opacity(80%);
    -webkit-filter: opacity(80%);
    -moz-filter: opacity(80%);
  }
  img:hover {
    filter: none;
    -webkit-filter: none;
    -moz-filter: none;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-family: "CastIron";
    font-size: 2em;
    text-align: center;
  }
  a:hover {
    color: $bleu;
  }
}
@media (min-width: 1200px) {
  #tousProfs {
    padding: 0 10vw;
  }
}
</style>