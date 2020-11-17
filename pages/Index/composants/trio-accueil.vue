<template>
  <section id="trio">
    <router-link to="/cours">
      <a href="/pages/cours.html">
        <div id="ImgCours">
          <img
            src="medias/images/EleveClasse.PNG"
            alt="Photo d'un élève en classe"
          />
        </div>
        <button>Voir Cours</button>
      </a>
    </router-link>
    <router-link to="/cours">
      <a href="/pages/profs.html">
        <div id="ImgProfs">
          <img
            src="medias/images/Rencontre20ans.PNG"
            alt="Photo d'un professeur avec des anciens étudiants"
          />
        </div>
        <button>Voir Profs</button>
      </a>
    </router-link>
    <router-link to="/vieetudiante">
      <a href="/pages/vieetudiante.html">
        <div id="ImgVie">
          <img src="medias/images/Manette.PNG" alt="Manette en main" />
        </div>
        <button>Voir La Vie</button>
      </a>
    </router-link>
  </section>
</template>

<script>
module.exports = {};
</script>

<style>
</style>