(function(){

    // les queries
    let carrousel = document.querySelector(".carrousel");
    let btnFermerCarrousel = document.querySelector(".carrousel>button");
    let btnsDeplacement = document.querySelectorAll(".deplacement")
    let figureCarrousel = document.querySelector(".carrousel>figure");
    let formCarrousel = document.querySelector(".carrousel>form");
    let galerie = document.querySelector(".galerie");
    let lesImages = galerie.querySelectorAll("img");

    // les variables
    let index = 0;
    let direction = "";

    // event listener sur la fermeture de la boîte modale
    btnFermerCarrousel.addEventListener("mousedown", function(){

        carrousel.classList.remove("carrousel--ouvrir");
        
        for (enfant of figureCarrousel.children){

            enfant.classList.remove("carrousel__img--activer");
        }

        index = 0;
        direction = "";
        formCarrousel.innerHTML = "";
    })

    for(const bouton of btnsDeplacement){

        bouton.addEventListener("mousedown", function(e){

            let imageIndex = 0;

            images = e.target.parentElement.nextElementSibling.children;

            for (image of images){

                if (image.classList.contains("carrousel__img--activer")){

                    imageIndex = image.dataset.index

                }
            }
            if(e.target.classList.contains("suivant")){

                direction = 1;
            }

            else{

                direction = -1;
            }

            activerImage(imageIndex, direction);
        })
    }
    // les fonctions

    /**
     * Fonction qui effectue l'ouverture du carrousel
     * @param {string} image la valeur de data-index de l'image à afficher à l'ouverture du carrousel
     */
    function ouvrirCarrousel(imageIndex){

        // pour empêcher la duplication des boutons en cliquant sur les images à l'extérieur du carrousel
        if(!carrousel.classList.contains("carrousel--ouvrir")){

            carrousel.classList.add("carrousel--ouvrir");

            // pour rajouter les radios buttons lors de la fermeture et réouverture du carrousel/
            if(formCarrousel.innerHTML == ""){

                for(const image of lesImages){

                    ajouterRadios();
                }
            }

            activerImage(imageIndex);
        }
    }

    /**
     * Fonction qui active le bon bouton radio à l'image activée
     * @param {string} imageIndex la valeur de l'index de l'image affichée à associer avec le bon bouton radio
     */
    function checkRadios(imageIndex){

        let radios = document.querySelectorAll("[name='radioCarrousel']");

        for(const radio of radios){

            radio.checked = false;

            if(imageIndex == radio.dataset.index){

                radio.checked = true;
            }
        }
    }

    /**
     * Fonction qui crée un élément img pour chaque image contenue dans la galerie
     */
    function ajouterImages(){

        for (const image of lesImages){

            let imageCarrousel = document.createElement("img");

            imageCarrousel.setAttribute("src", image.getAttribute("src"));
            imageCarrousel.dataset.index = index;
            figureCarrousel.appendChild(imageCarrousel);

            ajouterRadios();

            // ajout d'un écouteur d'événement sur chaque image pour pouvoir ouvrir la boîte modale
            image.addEventListener("mousedown",function(){

                ouvrirCarrousel(imageCarrousel.dataset.index);
            })
        }
    }

    /**
     * Fonction qui ajoute un bouton radio pour chaque image contenue dans la figure
     */
    function ajouterRadios(){

        let radioCarrousel = document.createElement("input");

        radioCarrousel.setAttribute("type", "radio");
        radioCarrousel.setAttribute("name", "radioCarrousel");
        radioCarrousel.dataset.index = index;

        index++;

        formCarrousel.appendChild(radioCarrousel);

        radioCarrousel.addEventListener("mousedown", function(){

            activerImage(this.dataset.index);
        })
    }

    /**
     * Fonction qui active l'affichage de l'image désirée
     * @param {string} index la valeur de l'index de l'image à afficher
     * @param {string} direction la direction du déplacement avec les flèches, soit 1 pour image suivante, -1 pour image précédente et "" par défaut lorsqu'on arrive de l'ouverture initiale de la fenêtre, ou des boutons radio
     */
    function activerImage(index, direction = ""){
        if(direction == -1){

            figureCarrousel.children[index].classList.remove("carrousel__img--activer");

            if(parseInt(index) - 1 == - 1){

                imageIndex = figureCarrousel.children.length - 1;
            }

            else{

                imageIndex = parseInt(index) - 1;
            }

            figureCarrousel.children[imageIndex].classList.add("carrousel__img--activer");
            checkRadios(imageIndex);
        }

        if(direction == 1){
            figureCarrousel.children[index].classList.remove("carrousel__img--activer");

            if(parseInt(index) + 1 > figureCarrousel.children.length - 1){

                imageIndex = 0;
            }

            else{

                imageIndex = parseInt(index) + 1;
            }

            figureCarrousel.children[imageIndex].classList.add("carrousel__img--activer");
            checkRadios(imageIndex);
        }

        if(direction == ""){
            for (enfant of figureCarrousel.children){

                enfant.classList.remove("carrousel__img--activer");
            }

            figureCarrousel.children[index].classList.add("carrousel__img--activer");
            checkRadios(index);
        }
    }

    ajouterImages();
})();