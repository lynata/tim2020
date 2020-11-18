<template>
   <section id="footer">
        <footer >
            <div id="contact">
                <h1>Nous joindre</h1>
                <div class="liste-contact">
                    <div class="information">
                        <h3>Département TIM</h3>
                        <p>Premier Étage Secteur B</p>
                        <p>Bureau B1159</p>
                        <p><a href="http://tim.cmaisonneuve.qc.ca/" class="pastille" target="_blank">http://tim.cmaisonneuve.qc.ca</a></p>
                    </div>
    
                    <div class="information">
                        <h3>Collège Maisonneuve</h3>
                        <p>Campus 2030 2030, boulevard Pie-IX</p>
                        <p>Bureau 430</p>
                        <p>Tél.: 514 254-7131, poste 4800</p>
                        <p>sfc@cmaisonneuve.qc.ca </p>
                    </div>
    
                    <div class="information">
                        <h3>Professeur Pivot</h3>
                        <p>Premier Étage Secteur B</p>
                        <p>Bureau 1163</p>
                        <p>Tél.: 254-7131 poste 4714</p>
                        <p>vtoroussian@cmaisonneuve.qc.ca</p>
                    </div>
    
                </div>

                <!-- Google map -->
                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.993657200302!2d-73.55574928416262!3d45.5504531357045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bb5caf62731%3A0xe4ee304f2ed7713c!2sCEGEP%20Maisonneuve!5e0!3m2!1sen!2sca!4v1604280023288!5m2!1sen!2sca"
                        width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
                
            </div>
            <div id="footerEnd">
                <img src="medias/images/logo/_LogoTIM_carré.png" alt="filter applied">
                <!-- liens sociaux -->
                <ul id="liensSociaux">
                    <li><a href="https://www.facebook.com/maisonneuvetim" class="pastille" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/maisonneuvetim/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://discord.com/invite/53vFvr9" target="_blank"><i class="fab fa-discord"></i></a></li>
                    <li><a href="https://www.youtube.com/user/TIMaisonneuve" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://ca.linkedin.com/in/tim-maisonneuve-9407b7131" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                </ul>
    
                <!-- Footer mini nav -->
                <ul class="footerNav">
                    <li><a href="pages/cours.html">Cours</a></li>
                    <li><a href="pages/profs.html">Profs</a></li>
                    <li><a href="pages/projets.html">Projets</a></li>
                    <li><a href="pages/vieetudiante.html">Vie Etudiante</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <p id="droitAuteur">undefinedvariable2020</p>
            </div>
        </footer>
    </section>
</template>

<script>
module.exports = {

}
</script>

<style lang='scss'>
section#footer {
  color: white;
  background-color: #0b132b;

  #contact {
    background-color: #1c2c5c;
    display: flex;
    flex-direction: column;
    background-image: url("../medias/images/halfTone/Halftone-Effect-Background_2.png");
    background-size: 17em;
    background-repeat: repeat-x;
  }
  h1 {
    font-family: CastIron;
    font-size: 4em;
  }

  h1,
  h3,
  p {
    color: white;
    display: flex;
    justify-content: center;
  }

  #footerEnd {
    background-image: url("../medias/images/halfTone/Halftone-Effect-Background_2.png");
    background-size: 17em;
    background-repeat: repeat-x;
  }

  div img {
    max-width: 5em;
    display: flex;
    align-items: center;
    margin: auto;
    filter: invert(1);
  }

  #liensSociaux {
    display: flex;
    justify-content: center;

    li a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2em;
      height: 2em;
      background-color: #3a506b;
      border-radius: 50%;
      margin: 0 0.5em;
      font-size: 1.25em;
    }
  }

  .footerNav {
      display:none;
  }
  #droitAuteur {
    margin-bottom: 0;
    padding-bottom: 0.3em;
  }
}

@media only screen and (min-width: 768px) {
  section#footer {
    .liste-contact {
      display: flex;
      align-content: space-between;
      justify-content: space-evenly;
      padding-bottom: 4em;
    }
    .information {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin: 0;
      }
    }
    .footerNav{
    display: flex;
    justify-content: space-evenly;
    border-top: white solid 2px;
    border-bottom: white solid 2px;
    }
  }
}


</style>