//  Fonction qui teste si la chaîne commence par une lettre entre 'a' et 'd' (majuscule ou minuscule)
 function commenceParLettreAD(chaine) {
    const premiereLettre = chaine.charAt(0) // on récupère le 1er caractère
    return /^[a-dA-D]/.test(premiereLettre); 

 }

//  Fonction qui renvoie true si la chaîne contient exactement un seul '@'
 function contientArobase(chaine) {
  const nbArobase = chaine.split('@').length - 1; 
  return nbArobase === 1;
}

// 3. Ecrire une fonction qui renvoie 'true' lorsque'une chaîne contient au moins un chiffre sinon renvoie 'false'.
 function contientChiffre(chaine) {
  return /\d/.test(chaine); 
}

// Fonction qui remplace tous les chiffres par des étoiles *
function remplacerChiffre(chaine) {
  return chaine.replace(/\d/g, '*'); // g = global, remplace tous les chiffres
}
const texte = prompt("Entrez une chaîne : ");

console.log("Commence par lettre entre a et d :", commenceParLettreAD(texte));
console.log("Contient un seul @ :", contientArobase(texte));
console.log("Contient au moins un chiffre :", contientChiffre(texte));
console.log("Chaîne avec chiffres remplacés :", remplacerChiffre(texte));




// 1. Vérifie si la chaîne commence par a-d ou A-D
// function commenceParLettreAD(chaine) {
//   return /^[a-dA-D]/.test(chaine);
// }

// // 2. Vérifie s’il y a un seul '@'
// function contientUnSeulArobase(chaine) {
//   return chaine.split('@').length - 1 === 1;
// }

// // 3. Vérifie s’il y a au moins un chiffre
// function contientChiffre(chaine) {
//   return /\d/.test(chaine);
// }

// // 4. Remplace tous les chiffres par '*'
// function remplacerChiffre(chaine) {
//   return chaine.replace(/\d/g, '*');
// }

// // 5. Script principal
// const texte = prompt("Entrez une chaîne :");

// console.log("1 Commence par a-d ou A-D :", commenceParLettreAD(texte));
// console.log("2 Contient un seul @ :", contientUnSeulArobase(texte));
// console.log("3 Contient au moins un chiffre :", contientChiffre(texte));
// console.log("4 Chaîne avec chiffres remplacés :", remplacerChiffre(texte));
