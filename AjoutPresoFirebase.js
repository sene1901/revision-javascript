  // Import Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getFirestore, collection, addDoc, onSnapshot } 
    from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

  // Configuration Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDCyJ4LMan_5jk8-f-FllRco-pKrSqlVTg",
    authDomain: "ajoutepers.firebaseapp.com",
    projectId: "ajoutepers",
    storageBucket: "ajoutepers.appspot.com", 
    messagingSenderId: "912718635009",
    appId: "1:912718635009:web:5d7d1cb532b7f8ac2a6000",
    measurementId: "G-WZGP5Q6V41"
  };

  //  Initialiser Firebase et Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 

  // Référence de la collection
  const personnesRef = collection(db, "personnes");

  // Fonction pour afficher les données Firestore
  function afficherTableau(personnes) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    if (personnes.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="5" class="text-muted">Aucune donnée trouvée</td></tr>';
      return;
    }

    personnes.forEach((personne, index) => {
      const ligne = `
        <tr>
          <td>${index + 1}</td>
          <td>${personne.nom}</td>
          <td>${personne.prenom}</td>
          <td>${personne.age}</td>
          <td>${personne.ville}</td>
            <td>
              <button class="btn btn-danger btn-sm" data-id="${personne.id}">
                 Supprimer
              </button>
            </td>
          </tr>`;
      tableBody.innerHTML += ligne;
    });

//  Ajout des événements de suppression
      const boutons = document.querySelectorAll(".btn-danger");
      boutons.forEach((btn) => {
        btn.addEventListener("click", async () => {
          const id = btn.getAttribute("data-id");
          if (confirm("Voulez-vous vraiment supprimer cette personne ?")) {
            await deleteDoc(doc(db, "personnes", id));
          }
        });
      });
    


  }


  //  Écoute en temps réel de Firestore
  onSnapshot(personnesRef, (snapshot) => {
    const personnes = [];
    snapshot.forEach(doc => {
      personnes.push(doc.data());
    });
    afficherTableau(personnes);
  });

  //  Ajouter une personne dans Firestore
  document.getElementById("personneForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const age = document.getElementById("age").value.trim();
    const ville = document.getElementById("ville").value.trim();

    if (!nom || !prenom || !age || !ville) return;

    try {
      await addDoc(personnesRef, { nom, prenom, age, ville });
      document.getElementById("personneForm").reset();
    } catch (error) {
      console.error("Erreur lors de l’ajout :", error);
    }
  });
