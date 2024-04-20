let launchCount = 0;

function submit(){
    let inp = document.getElementById("dice").value;
    let resultat = document.getElementById("resultat");
    let imageContainer = document.getElementById("image-container");
    
    // Incrémenter le compteur de lancement
    launchCount++;
    
    // Effacer le contenu précédent de l'élément image
    imageContainer.innerHTML = '';
    
    let num = [];
    let imagesHTML = '';
    for (let i = 0; i < inp; i++) {
        let ran = Math.trunc(Math.random() * 6) + 1;
        num.push(ran);
        imagesHTML += `<img src="images/${ran}.png" class="dice-image">`;
    }
    
    // Afficher les valeurs des dés avec le numéro de lancement
    let resultText = `Launch ${launchCount}: ${num.join(', ')}`;
    resultat.textContent = resultText;
    
    // Créer une nouvelle ligne d'images
    let newLine = document.createElement('div');
    newLine.classList.add('image-line');
    newLine.innerHTML = imagesHTML;
    imageContainer.prepend(newLine);
}
