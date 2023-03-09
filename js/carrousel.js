(function(){
    // fonction IFEE
    console.log("début du carrousel");

    let bouton__ouvrir = document.querySelector(".bouton__ouvrir");

    let elmCarrousel = document.querySelector(".carrousel");
    let elmCarrousel__x = document.querySelector(".bouton__x");
    let elmCarrousel__figure = document.querySelector(".carrousel__figure")

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
    })

    // fonction qui ajoute les images contenus dans la galerie vers le carrousel
    function ajouterCarrousel(){

        for(const elmIMG of elmGalerie__images){

            ajouterImage(elmIMG);
        }
    }


    // fonction qui ajoute la source de l'image dans un nouvel élément image créé
    function ajouterImage(element){

        let elmCarrousel__img = document.createElement("img");

        elmCarrousel__img.setAttribute("src", element.getAttribute("src"));

        elmCarrousel__figure.appendChild(elmCarrousel__img);
    }
})();