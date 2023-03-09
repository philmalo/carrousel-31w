(function(){
    // fonction IFEE
    console.log("début du carrousel");

    let bouton__ouvrir = document.querySelector(".bouton__ouvrir");
    let elmCarrousel = document.querySelector(".carrousel");
    let elmCarrousel__x = document.querySelector(".bouton__x");
    console.log("bouton", bouton__ouvrir.tagName);

    bouton__ouvrir.addEventListener("mousedown", function(){
        console.log("boite modale");
        elmCarrousel.classList.add("carrousel--ouvrir");
    })

    elmCarrousel__x.addEventListener("mousedown", function(){
        console.log("fermer boite modale");
        elmCarrousel.classList.remove("carrousel--ouvrir");
    })
})();