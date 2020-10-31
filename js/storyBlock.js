//<scrip src="https://cdn.jsdelivr.net/npm/storyblok-js-client@3.1.0/dist/index.standalone.js"></scrip>

/*    //petite configuration nécéssaire pour acéder a vos données
    let Storyblok = new StoryblokClient({
        accessToken: 'N98tQRqdb63OJePlzQiCqgtt'
    })


    async function obtenirProfs() {

        //le await et le ascyn est important , car aller chercher les données sur internet
        //peut prendre un certain temps, donc on doit les "attendres"
        let lesDonnes = await Storyblok.getAll("cdn/stories", {
            "starts_with": "professeurs/"
        });

        // await console.log(lesDonnes)

        console.log("obtenirProfs -> lesDonnes", lesDonnes)
        return lesDonnes;


    }



    //fonction pour afficher les données dans la page
    async function afficherDonnees() {

        //on doit await la fonction vu quelle va chercher les données
        // sur internet dans le cms par ajax
        let listeProfs = await obtenirProfs();

        let elementUl = document.querySelector("#listeProfs");

        //simple boucle sur la liste des données qu'on a recu
        for (const prof of listeProfs) {

            let elemLi = document.createElement("li");

            elemLi.innerHTML = `<ul class="border-solid border-green-800 border-opacity-100 border">
                    <li>${prof.content.nom}<li/>
                    <li>${prof.content.description}<li/>
                    <img src=${prof.content.photo.filename}> </img>
                </ul>`;

            elementUl.appendChild(elemLi)

        }

    }

    afficherDonnees()*/