// Sélectionner l'input qui va afficher les valeurs
let display = document.querySelector("#number1");

// Sélectionner tous les boutons de la page
const buttons = document.querySelectorAll("button");

// Initialiser une variable vide pour les valeurs que l'utilisateur/trice entre
let inputUtilisateur = "";

// Event listener à tout les bouttons
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.textContent;

        // Si le bouton est 'CLR', on efface tout dans la fenetre input
        if (value === "CLR") {
            inputUtilisateur = "";
            display.value = inputUtilisateur;
        }

        // Si le boutton est "back", alors on enlève le dernier caractère de la fenetre input (j'ai préféré slice que split pour faire ça)
        else if (value === "BACK") {
            inputUtilisateur = inputUtilisateur.slice(0, -1);
            display.value = inputUtilisateur;
        }

        // Si le bouton est '=', on évalue l'expression mathématique
        else if (value === "=") {
            try {
                // On évalue l'expression et on affiche le résultat. Avec la fonction eval, on peut calculer une chaine de caractère si c'est un calcul mathématique
                let result = eval(inputUtilisateur);
                display.value = result;
                inputUtilisateur = result.toString(); // Réinitialiser la chaine avec le résultat
                inputUtilisateur = ""; // La fenetre input se vide toute seule quand on a appuyyé sur "="
                
            } catch (e) {
                display.value = "Erreur";
            }
        }

        // Pour tous les autres boutons (nombres et opérateurs), on les ajoute à la chaîne
        else {
            inputUtilisateur += value;
            display.value = inputUtilisateur;
        }
    });
});
