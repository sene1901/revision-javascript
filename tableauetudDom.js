 let etudiants = [];

    function sommeNotes(notes) {
      return notes.reduce((acc, n) => acc + n, 0);
    }

    function ajouterEtudiant() {
      const prenom = document.getElementById("prenom").value;
      const nom = document.getElementById("nom").value;
      const age = parseInt(document.getElementById("age").value);
      const notes = document.getElementById("notes").value.split(',').map(n => parseFloat(n.trim()));

      if(!prenom || !nom || !age || notes.length === 0) {
        alert("Veuillez remplir tous les champs correctement !");
        return;
      }

      etudiants.push({ prenom, nom, age, notes });
      afficherEtudiants();

      // vider les champs
      document.getElementById("prenom").value = '';
      document.getElementById("nom").value = '';
      document.getElementById("age").value = '';
      document.getElementById("notes").value = '';
    }

    function afficherEtudiants(liste = etudiants) {
      const tbody = document.getElementById("tableEtudiants").querySelector("tbody");
      tbody.innerHTML = "";
      liste.forEach(e => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${e.prenom}</td>
          <td>${e.nom}</td>
          <td>${e.age}</td>
          <td>${e.notes.join(', ')}</td>
          <td>${sommeNotes(e.notes)}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function trierParNom() {
      const tri = etudiants.slice().sort((a, b) => a.nom.localeCompare(b.nom));
      afficherEtudiants(tri);
    }

    function filtrerPlusDe18() {
      const filtre = etudiants.filter(e => e.age > 18);
      afficherEtudiants(filtre);
    }