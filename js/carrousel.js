(function(){
    // fonction IFEE
    console.log("début du carrousel");

    let bouton__ouvrir = document.querySelector(".bouton__ouvrir");

    let elmCarrousel = document.querySelector(".carrousel");
    let elmCarrousel__x = document.querySelector(".bouton__x");
    let elmCarrousel__figure = document.querySelector(".carrousel__figure");
    let elmCarrousel__form = document.querySelector(".carrousel__form");

    let elmGalerie = document.querySelector(".galerie");
    let elmGalerie__images = elmGalerie.querySelectorAll("img");

    
    console.log("bouton", bouton__ouvrir.tagName);
    console.log("images galerie", elmGalerie__images);

    
    // écouteur pour l'ouverture du carrousel
    bouton__ouvrir.addEventListener("mousedown", function(){
        
        console.log("boite modale");
        
        elmCarrousel.classList.add("carrousel--ouvrir");
        
        ajouterCarrousel();
    })
    
    // écouteur pour la fermeture du carrousel
    elmCarrousel__x.addEventListener("mousedown", function(){
        
        console.log("fermer boite modale");
        
        elmCarrousel.classList.remove("carrousel--ouvrir");
        // delete elmCarrousel__radio;
    })

    // fonction qui ajoute les images contenus dans la galerie vers le carrousel
    function ajouterCarrousel(){

        for(const elmIMG of elmGalerie__images){

            ajouterImage(elmIMG);
            ajouterRadio(); // ajout des radio buttons dans le carrousel
        }
        elmCarrousel__figure.children[0].classList.add("carrousel__img--activer")
    }


    // fonction qui ajoute la source de l'image dans un nouvel élément image créé
    function ajouterImage(element){

        let elmCarrousel__img = document.createElement("img");

        elmCarrousel__img.setAttribute("src", element.getAttribute("src"));
        
        elmCarrousel__img.classList.add("carrousel__img");

        elmCarrousel__img.dataset.index = index;

        elmCarrousel__figure.appendChild(elmCarrousel__img);
    }

    let index = 0;
    let index_precedent = -1;

    // fonction qui ajoute les boutons de navigation dans le carrousel
    function ajouterRadio(){
        let elmCarrousel__radio = document.createElement("input");

        elmCarrousel__radio.setAttribute("type", "radio");
        elmCarrousel__radio.setAttribute("name", "radCarrousel");
        elmCarrousel__radio.dataset.index = index;

        index++;

        elmCarrousel__form.appendChild(elmCarrousel__radio);
        elmCarrousel__radio.addEventListener("mousedown", function(){
            activerImage(this.dataset.index);
        })
    }

    function activerImage(index){
        if(index_precedent != -1){
            elmCarrousel__figure.children[index_precedent].classList.remove("carrousel__img--activer")
        }
        elmCarrousel__figure.children[index].classList.add("carrousel__img--activer");
        index_precedent = index;
    }
})();