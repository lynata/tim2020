<template>
  <section id="filtre">
    <h1>Cours</h1>
    <div uk-filter="target: .js-filter">
      <ul class="uk-subnav uk-subnav-pill" id="btnFiltre">
        <li id="btnAll" uk-filter-control>
          <i><a href="#">Tous</a></i>
        </li>
        <li uk-filter-control="[data-tags*='art']">
          <a href="#"><i class="fas fa-palette"></i></a>
        </li>
        <!-- art -->
        <li uk-filter-control="[data-tags*='design']">
          <a href="#"><i class="fas fa-pencil-ruler"></i></a>
        </li>
        <!-- design -->
        <li uk-filter-control="[data-tags*='prog']">
          <a href="#"><i class="fas fa-code"></i></a>
        </li>
        <!-- prog -->
        <li uk-filter-control="[data-tags*='jeu']">
          <a href="#"><i class="fas fa-gamepad"></i></a>
        </li>
        <!-- jeu -->
        <li uk-filter-control="[data-tags*='scena']">
          <a href="#"><i class="fas fa-book-reader"></i></a>
        </li>
        <!-- scena -->
        <li uk-filter-control="[data-tags*='profess']">
          <a href="#"><i class="fas fa-user-tie"></i></a>
        </li>
        <!-- profess -->
      </ul>
      <!-- <div id="sess1">
                <h2>Session 1</h2>
                <ul  class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center">
                    <li data-tags="scena">Création Vidéo</li>
                    <li data-tags="art">Conception graphique et imagerie matricielle</li>
                    <li data-tags="prog">Mise en page web</li>
                    <li data-tags="art scena">Animation et interactivité en jeu</li>
                </ul>
            </div> -->

        <!-- SESSION 1 -->
        <section class="session">
          <h1>Session 1</h1>
          <ul class="js-filter">
            <li data-tags="scena">
              <h2>Création vidéo</h2>
              <span class="flecheCours" v-on:click="cours1 = !cours1"
                >Voir ce cours</span>
            </li>
            <li data-tags="art">
              <h2>Conception graphique et Imagerie matricielle</h2>
              <span class="flecheCours" v-on:click="cours2 = !cours2">
                Voir ce cours</span>
            </li>
            <li data-tags="prog">
              <h2>Mise en page web</h2>
              <span class="flecheCours" v-on:click="cours3 = !cours3">
                Voir ce cours</span>
            </li>
            <li data-tags="art scena">
              <h2>Animation et interactivité en jeu</h2>
              <span class="flecheCours" v-on:click="cours4 = !cours4">
                Voir ce cours</span>
            </li>
          </ul>

          <!-- SESSION 2 -->
          <section class="session">
          <h1>Session 2</h1>
          <ul class="js-filter">
            <li data-tags="art scena">
              <h2>Effets spéciaux et animation</h2>
              <span class="flecheCours" v-on:click="cours1 = !cours1"
                >Voir ce cours</span>
            </li>
            <li data-tags="art">
              <h2>Conception graphique et Imagerie vectorielle</h2>
              <span class="flecheCours" v-on:click="cours2 = !cours2">
                Voir ce cours</span>
            </li>
            <li data-tags="prog">
              <h2>Animation et Interactivité Web</h2>
              <span class="flecheCours" v-on:click="cours3 = !cours3">
                Voir ce cours</span>
            </li>
            <li data-tags="prog jeu scena">
              <h2>Création de jeu 2D</h2>
              <span class="flecheCours" v-on:click="cours4 = !cours4">
                Voir ce cours</span>
            </li>
          </ul>

          <cours-1 v-if="cours1 == true"></cours-1>

          <cours-2 v-if="cours2 == true"></cours-2>

          <cours-3 v-if="cours3 == true"></cours-3>

          <cours-4 v-if="cours4 == true"></cours-4>
      </section>
    </div>
  </section>
</template>

<script lang="text/babel">
export default {
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
.session{
  position: relative;
  font-family: "ManRope";
  background-color: $bleuFond;
  .coursPopup {
    position: absolute;
    background-color: $bleuFond;
    width: 50%;
    top: -1em;
    left: 25%;
    padding: 1em 2em;
    color: #fff;
    li {
      background-color: $bleuFond;
      box-shadow: none;
      color: #fff;
    }
  }
  li {
    background-color: $blanc;
    box-shadow: $boxNoir;
    margin: 1em;
  }
  // h2{
  //   color: $bleu;
  //   font-family: Castiron;
  // }
}

#filtre {
  margin-top: 30%;
  background-color: $fond;
  h1 {
    font-family: Castiron;
    color: $bleu;
    font-size: 6vw;
    margin-left: 1.5vw;
  }
  #btnFiltre {
    // margin-top: 15vh;
    background-color: $fond;
    display: flex;
    justify-content: center;

    li {
      // display: flex;
      // justify-content: center;
      a {
        // font-size: 5vw;
        background-color: rgb(209, 209, 209);
        color: black;
        width: 5vw;
        border-radius: 15px;
        margin: 0 1vw;
        display: flex;
        justify-content: center;
      }

      a:hover {
        color: $bleu;
      }

      a:nth-child(1) {
        font-size: 1.5vw;
        font-family: Manrope;
        font-weight: bold;
      }
    }
  }

  #sess1 {
    margin: 2vw;
    h2 {
      font-family: Castiron;
      font-size: 5vw;
      color: white;
    }
    li {
      width: 100%;
      background-color: rgb(209, 209, 209);
      margin: 0;
      border: black 1px solid;
      padding: 2vw;
      font-family: Manrope;
    }
  }
}


// Desktop
@media (min-width: 1200px) {
  #filtre {
    margin-top: 0 !important;

    #btnFiltre {
      margin: 0;
      li {
        a:nth-child(1) {
          font-size: 0.5vw;
          // font-family: Manrope;
          // font-weight: bold;
        }
      }
    }
    #sess1 {
      h2 {
        font-size: 3vw;
      }
    }
  }
}
</style>