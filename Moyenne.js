const notes = [];
let i = 0; // compteur de notes valides

while (i < 5) {
  const noteSaisie = prompt(`Entrez la note ${i + 1} (entre 0 et 20) :`);
  const note = parseFloat(noteSaisie);

  if (isNaN(note)) {
    alert("Veuillez entrer un nombre.");
    continue; // redemande sans avancer i
  }

  if (note < 0 || note > 20) {
    alert("La note doit être entre 0 et 20.");
    continue; // redemande sans avancer i
  }

  // Si on arrive ici, la note est valide
  notes.push(note);
  console.log(`Note ${i + 1} : ${note}`);
  i++; // on passe à la note suivante
}

// Calcul de la moyenne
const somme = notes.reduce((acc, n) => acc + n, 0);
const moyenne = somme / notes.length;

// Détermination du résultat
let resultat;
if (moyenne >= 10) {
  resultat = "Admis";
} else if (moyenne >= 8) {
  resultat = "Rattrapage";
} else {
  resultat = "Échec";
}
alert(`Moyenne : ${moyenne.toFixed(2)} — ${resultat}`);
