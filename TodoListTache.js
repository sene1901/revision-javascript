// // Tableau des tâches
//     let taches = [];

//     // Ajouter une tâche
//     function ajouterTache() {
//       const input = document.getElementById('tacheInput');
//       const nom = input.value.trim();

//       if (nom === "") {
//         alert("Veuillez entrer une tâche !");
//         return;
//       }

//       taches.push(nom);
//       input.value = "";
//       afficherTaches();
//     }

//     // Supprimer une tâche selon son index
//     function supprimerTache(index) {
//       taches.splice(index, 1);
//       afficherTaches();
//     }

//     // Afficher les tâches dans le tableau
//     function afficherTaches() {
//       const tbody = document.getElementById('listeTaches');
//       tbody.innerHTML = "";

//       taches.forEach((tache, index) => {
//         tbody.innerHTML += `
//           <tr>
//             <td>${index + 1}</td>
//             <td>${tache}</td>
//             <td>
//               <button class="btn btn-danger btn-sm" onclick="supprimerTache(${index})">
//                 <i class="bi bi-trash3"></i>
//               </button>
//             </td>
//           </tr>
//         `;
//       });
//     }
    

    // --- 1. Charger les tâches depuis le localStorage ---
    let taches = JSON.parse(localStorage.getItem("taches")) || [];

    // --- 2. Fonction pour afficher les tâches ---
    function afficherTaches() {
      const tbody = document.getElementById("listeTaches");
      tbody.innerHTML = "";

      taches.forEach((tache, index) => {
        tbody.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${tache}</td>
            <td>
              <button class="btn btn-danger btn-sm" onclick="supprimerTache(${index})">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        `;
      });
    }

    // --- 3. Fonction pour ajouter une tâche ---
    function ajouterTache() {
      const input = document.getElementById("tacheInput");
      const nom = input.value.trim();

      if (nom === "") {
        alert("Veuillez entrer une tâche !");
        return;
      }

      taches.push(nom);
      input.value = "";

      sauvegarderTaches();
      afficherTaches();
    }

    // --- 4. Fonction pour supprimer une tâche ---
    function supprimerTache(index) {
      taches.splice(index, 1);
      sauvegarderTaches();
      afficherTaches();
    }

    // --- 5. Sauvegarder les tâches dans le localStorage ---
    function sauvegarderTaches() {
      localStorage.setItem("taches", JSON.stringify(taches));
    }

    // --- 6. Afficher les tâches au chargement de la page ---
    afficherTaches();
