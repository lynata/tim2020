<template>
  <section id="tousProfs" class="uk-animation-slide-bottom-small">
    <div v-bind:key="index" v-for="(unProf, index) in lesProfs" uk-lightbox>
      <a
        href="../../../medias/images/Professeurs/Vahik Toroussian.jpg"
        data-caption="J’enseigne au Collège de Maisonneuve depuis 10 ans où j’occupe d’ailleurs le rôle de coordonnateur du programme des Techniques d’intégration multimédia.

J’ai fait mes études à l’Université de Montréal et obtenu une maîtrise en traitement de l’image. Ma spécialité est en programmation sur support et j’entends vous faire apprécier l’incroyable potentiel de ce volet multimédia.

Ce qui vous attend : des travaux pratiques sous forme de jeux (casse-tête, quêtes, etc.) et la création de prototypes de jeux avec Virtools. Message à ceux qui aiment bien équilibrer travail et activité physique : je suis toujours disponible pour une partie de soccer… à bon entendeur salut!"
        ><img
          v-bind:src="unProf.content.photo.filename"
          v-bind:alt="unProf.content.nom"
        />{{ unProf.content.nom }}</a
      >
    </div>
    <div><ul id="listeProfs"></ul></div>
  </section>
</template>


<script lang="text/babel">
export default{

  data() {
    return {
      Storyblok: null,
      lesProfs: [],
    }
  },
   created() {
        let Storyblok = new StoryblokClient({
                accessToken: 'N98tQRqdb63OJePlzQiCqgtt'
            });
      Storyblok.getAll("cdn/stories",{"starts_with": "professeurs/"})
              .then(yeet => this.lesProfs = yeet);
  }
}
</script>

<style lang='scss' scoped>
$fond: #090c16;
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
    text-transform: uppercase;
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