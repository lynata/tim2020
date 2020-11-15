Vue.use(httpVueLoader);
// Vue.use(VueRouter)

//configuration pour utiliser sass, pas obligatoire si vous utilisez juste css
let sass = new Sass();

//configuration de sass, pas besoin d'y toucher c'est juste un copier collé , ca fonctionne tel quel
httpVueLoader.langProcessor.scss = function (scssText) {
  return new Promise(function (resolve, reject) {
    sass.compile(scssText, function (result) {
      if (result.status === 0) resolve(result.text);
      else reject(result);
    });
  });
};

const routes = [
  { path: '/', component: httpVueLoader('/pages/Index/accueil.vue') },
  { path: '/profs', component:  httpVueLoader('/pages/profs/profs.vue') },
  { path: '/cours', component:  httpVueLoader('/pages/cours/cours.vue') },
  { path: '/vie-etudiante', component:  httpVueLoader('/pages/vieetudiante/vie-etudiante.vue') },
  { path: '/projets', component:  httpVueLoader('/pages/projets/projets.vue') }
]

//configuration de VueRouter
const router = new VueRouter({
  routes // short for `routes: routes`
})
//initialisation de vue. la seule chose nécéssaire pour que vue fonctionne !
new Vue({
  el: "#app",
  // il faut que je dise quels composant j'utilise dans ma page et leur url
    router : router
});