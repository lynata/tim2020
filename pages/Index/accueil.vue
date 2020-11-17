<template>
  <div>
    <menu-mobile-commun></menu-mobile-commun>
    <header-accueil></header-accueil>
    <info-accueil></info-accueil>
    <projets-accueil></projets-accueil>
    <inscription-accueil></inscription-accueil> 
    <trio-accueil></trio-accueil>
    <le-footer></le-footer>
  </div>

</template>

<script>
module.exports = {
  // name: 'accueil',
   components : {
      'menu-mobile-commun' : httpVueLoader("/pages/commun/menu-mobile-commun.vue"),
      'header-accueil' : httpVueLoader("/pages/Index/composants/header-accueil.vue"),
      'info-accueil' : httpVueLoader("/pages/Index/composants/info-accueil.vue"),
      'projets-accueil' : httpVueLoader("/pages/Index/composants/projets-accueil.vue"),
      'inscription-accueil':  httpVueLoader("/pages/Index/composants/inscription-accueil.vue"),
      'trio-accueil' :  httpVueLoader("/pages/Index/composants/trio-accueil.vue"),
      'le-footer' : httpVueLoader("/pages/commun/le-footer.vue")
   }
  
}
</script>

<style lang='scss' src='css/accueil.scss'>
</style>