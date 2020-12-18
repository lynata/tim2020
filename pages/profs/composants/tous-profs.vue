<template>
  <section id="tousProfs" class="uk-animation-slide-bottom-small">
    <div v-bind:key="index" v-for="(unProf, index) in lesProfs" uk-lightbox>
      <a
        v-bind:href="unProf.content.photo.filename"
        v-bind:data-caption="unProf.content.description"
        ><img
          v-bind:src="unProf.content.photo.filename"
          v-bind:alt="unProf.content.nom"
        />{{ unProf.content.nom }}</a
      >
    </div>
    <div>
      <ul id="listeProfs"></ul>
    </div>
  </section>
</template>


<script lang="text/babel">
  export default {

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
      Storyblok.getAll("cdn/stories", {
          "starts_with": "professeurs/"
        })
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