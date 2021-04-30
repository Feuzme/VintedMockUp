var refreshBarre = () => {
    switch(+document.getElementById("critrech").value){
        case 0:
            document.getElementById("barrerecherche").placeholder = "Rechercher des articles";
            break;
        case 1:
            document.getElementById("barrerecherche").placeholder = "Rechercher des membres";
            break;
        case 2:
            document.getElementById("barrerecherche").placeholder = "Rechercher dans le forum";
            break;
        case 3:
            document.getElementById("barrerecherche").placeholder = "Rechercher par mot-clé";
            break;
    }
}