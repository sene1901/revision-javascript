// Sélection du formulaire
const form = document.querySelector('#loginForm');

// Sélection de l'input email et password
const emailInput = form.querySelector('#email');
const passwordInput = form.querySelector('#password');

// Écoute le changement de la valeur de l'email
emailInput.addEventListener('change', function () {
  validEmail(this);
});
// Fonction de validation d'email
const validEmail = function (inputEmail) {
  // Expression régulière pour valider un email
  const emailRegExp = new RegExp(
    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-_]+\\.[a-z]{2,10}$'
  );

  const testEmail = emailRegExp.test(inputEmail.value);

  console.log(testEmail);

  const p = inputEmail.nextElementSibling;

  if (testEmail) {
    p.textContent = 'Adresse email valide ✅';
    p.classList.remove('text-danger');
    p.classList.add('text-success');
  } else {
    p.textContent = 'Adresse email invalide ';
    p.classList.remove('text-success');
    p.classList.add('text-danger');
  }
   return testEmail;
};


// Écoute le changement de la valeur de password
passwordInput.addEventListener('change', function (e) {
    
  validPassword(this);
});

// Fonction de validation password
const validPassword = function (inputPassword) {
  // Au moins 3 caractères, 1 majuscule, 1 minuscule, 1 chiffre
  let msg = '';
  let valid = false;

  if (inputPassword.value.length < 3) {
    msg = 'Le mot de passe doit contenir au moins 3 caractères.';
  } else if (!/[A-Z]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 majuscule.';
  } else if (!/[a-z]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 minuscule.';
  } else if (!/[0-9]/.test(inputPassword.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 chiffre.';
  } else {
    msg = 'Le mot de passe est valide ✅';
    valid = true;
  }

  // Récupération de la balise juste après l’input
  const p = inputPassword.nextElementSibling;

  // Affichage du message dynamique
  p.textContent = msg;

  if (valid) {
    p.classList.remove('text-danger');
    p.classList.add('text-success');
  } else {
    p.classList.remove('text-success');
    p.classList.add('text-danger');
  }

  return valid; // pour pouvoir réutiliser la fonction dans la validation globale
};


//  Validation globale du formulaire à la soumission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.clear();
  console.log('Soumission déclenchée');

  const emailOk = validEmail(emailInput);
  const passwordOk = validPassword(passwordInput);

  console.log('Résultats finaux →', { emailOk, passwordOk });

  if (emailOk === true && passwordOk === true) {
    // alert('Formulaire valide ');
    message.innerText = ' Formulaire valide '
    form.reset();
    form.querySelectorAll('p').forEach((p) => (p.textContent = ''));
  } else {
    // alert('Veuillez corriger les erreurs ');
     message.innerText = ' Veuillez corriger les erreurs '

  }
});
