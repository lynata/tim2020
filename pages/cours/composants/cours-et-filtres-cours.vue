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
    </div>
  </section>
</template>

<style lang="scss" scoped>
#filtre {
  margin-top: 30%;
  background-color: #101832;
  h1 {
    font-family: Castiron;
    color: #2cd9ff;
    font-size: 6vw;
    margin-left: 1.5vw;
  }
  #btnFiltre {
    // margin-top: 15vh;
    background-color: #101832;
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
        color: #2cd9ff;
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