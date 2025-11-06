// creer objet etudiant
const etudiant = {
    nom: "sene" ,
    prenom: "sadio",
    age: 20,
     notes: [12, 14, 18, 16]
}
console.log(etudiant)
// la somme des notes
 function  sommeNotes(etudiant){
    return etudiant.notes.reduce((acc, note) => acc + note, 0);
 }
 console.log(`La somme des notes de ${etudiant.prenom} ${etudiant.nom} :`, sommeNotes(etudiant));
//  creer tableau etudiant
 const etudiants = [
  { id: 1, prenom: "sadio", nom: "sene", notes: [12, 14, 18, 16],age: 20},
  { id: 2, prenom: "Alice", nom: "Martin", notes: [15, 18, 20], age: 20 },
  { id: 3, prenom: "Kader", nom: "Alpha", notes: [10, 12, 14], age: 17 },
  { id: 4, prenom: "Zara", nom: "Beta", notes: [16, 14, 19], age: 21 }
];

// Lister les étudiants par ordre alphabétique selon le nom
const triParNom = etudiants.slice().sort((a, b) => a.nom.localeCompare(b.nom));
console.log("Étudiants triés par nom :");
triParNom.forEach(e => console.log(`${e.nom} ${e.prenom}`));

// Lister les étudiants qui ont plus de 18 ans
const plusDe18 = etudiants.filter(e => e.age > 18);

console.log("Étudiants de plus de 18 ans :");
plusDe18.forEach(e => console.log(`${e.nom} ${e.prenom} - ${e.age} ans`));

//  afficher la somme des notes de tous les étudiants
console.log("Somme des notes de tous les étudiants :");
etudiants.forEach(e => {
  console.log(`${e.prenom} ${e.nom} : ${sommeNotes(e)}`);
});
