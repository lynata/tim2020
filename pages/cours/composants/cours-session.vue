<template>
  <section id="session">
    <div>
      <h2>Création vidéo</h2>
      <span class="flecheCours" v-on:click="cours1 = !cours1"
        >Voir ce cours</span
      >
    </div>
    <cours-1 v-if="cours1 == true"></cours-1>
    <div>
      <h2>Conception graphique et imagerie matricielle</h2>
      <span class="flecheCours" v-on:click="cours2 = !cours2">
        Voir ce cours</span
      >
    </div>
    <cours-2 v-if="cours2 == true"></cours-2>
    <div>
      <h2>Mise en page web</h2>
      <span class="flecheCours" v-on:click="cours3 = !cours3">
        Voir ce cours</span
      >
    </div>
    <cours-3 v-if="cours3 == true"></cours-3>
    <div>
      <h2>Animation et interactivité en jeu</h2>
      <span class="flecheCours" v-on:click="cours4 = !cours4">
        Voir ce cours</span
      >
    </div>
    <cours-4 v-if="cours4 == true"></cours-4>
  </section>
</template>
<script>
module.exports = {
  components: {
    cours1: httpVueLoader("../composants/cours-1.vue"),
    cours2: httpVueLoader("../composants/cours-2.vue"),
    cours3: httpVueLoader("../composants/cours-3.vue"),
    cours4: httpVueLoader("../composants/cours-4.vue"),
  },
  data() {
    return {
      cours1: false,
      cours2: false,
      cours3: false,
      cours4: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$fond: #101832;
$bleuFond: #1c2c5c;
$blanc: #e3e3e3;
$bleu: #2cd9ff;
$boxBleu: -3px 3px 0px 1px $bleu;
$boxNoir: -5px 5px 0px 1px #000;
#session {
  position: relative;
  font-family: "ManRope";
  .coursPopup {
    position: absolute;
    background-color: $bleuFond;
    div {
      background-color: $bleuFond;
      box-shadow: none;
      color: #fff;
    }
  }
  div {
    background-color: $blanc;
    box-shadow: $boxNoir;
    margin: 1em;
  }
}
</style>