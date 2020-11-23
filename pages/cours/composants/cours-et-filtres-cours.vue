<template>
    <section id="filtre" uk-filter="target: .js-filter">
        <ul class="uk-subnav uk-subnav-pill" id="btnFiltre">
            <li id="btnAll" uk-filter-control><i><a href="#">Tous</a></i></li>
            <li uk-filter-control="[data-tags*='art']"><a href="#"><i class="fas fa-palette"></i></a></li> <!-- art -->
            <li uk-filter-control="[data-tags*='design']"><a href="#"><i class="fas fa-pencil-ruler"></i></a></li> <!-- design -->
            <li uk-filter-control="[data-tags*='prog']"><a href="#"><i class="fas fa-code"></i></a></li> <!-- prog -->
            <li uk-filter-control="[data-tags*='jeu']"><a href="#"><i class="fas fa-gamepad"></i></a></li> <!-- jeu -->
            <li uk-filter-control="[data-tags*='scena']"><a href="#"><i class="fas fa-book-reader"></i></a></li><!-- scena -->
            <li uk-filter-control="[data-tags*='profess']"><a href="#"><i class="fas fa-user-tie"></i></a></li> <!-- profess -->
        </ul>
        <ul id="sess1" class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center">
            <li data-tags="scena">Création Vidéo</li>
            <li data-tags="art">Conception graphique et imagerie matricielle</li>
            <li data-tags="prog">Mise en page web</li>
            <li data-tags="art scena">Animation et interactivité en jeu</li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    #btnFiltre{
        background-color: #101832;
        display: flex;
        justify-content: center;

        li{
            a{
                // margin: 0;
                // padding: 5%;
                // font-size: 2vw;
                // background-color: cornflowerblue;

                font-size: 1.5vw;                
                background-color: rgb(209, 209, 209);
                color: black;
                width: 5vw;
                border-radius: 15px;
                margin: 0 1vw;
                display: flex;
                justify-content: center;
            }

            a:hover{
                color: #2cd9ff;
            }

            a:nth-child(1){
                font-size: 1.1vw;
                font-family: Manrope;
                font-weight: bold;
            }
        }
    }

    #sess1{
        li {
            width: 100%;
            background-color:  rgb(209, 209, 209);
            margin: 0;
        }
    }
</style>