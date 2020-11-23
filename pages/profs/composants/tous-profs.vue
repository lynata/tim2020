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
    <!-- Les reste a afficher dynamiquement -->
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
    <div>
      <a href="#"
        ><img
          src="/medias/images/Professeurs/Camille.jpg"
          alt="Camille Semaan"
        />Camille Semaan</a
      >
    </div>
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

#tousProfs {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  div {
    width: 10vw;
    margin: 0.5em 1em;
    text-align: center;
  }

  img {
    -webkit-box-shadow: -5px 5px 0px 2px $bleu;
    box-shadow: -5px 5px 0px 2px $bleu;
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
    margin: 0 10vw;
  }
}
</style>