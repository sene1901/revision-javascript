// ===== Connexion =====
const loginForm = document.querySelector('#login-form');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginMessage = document.querySelector('#login-message');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  if (loginEmail.value.trim() === "" || !email_verify(loginEmail.value.trim())) {
    setError(loginEmail, "Email invalide");
    valid = false;
  } else {
    setSuccess(loginEmail);
  }

  if (loginPassword.value.trim() === "") {
    setError(loginPassword, "Mot de passe requis");
    valid = false;
  } else {
    setSuccess(loginPassword);
  }

  if (valid) {
    loginMessage.style.display = "block";
    loginMessage.innerText = "🎉 Connexion réussie (test)";
  } else {
    loginMessage.style.display = "none";
  }
});

// ===== Inscription =====
const registerForm = document.querySelector('#register-form');
const regUsername = document.querySelector('#reg-username');
const regEmail = document.querySelector('#reg-email');
const regPassword = document.querySelector('#reg-password');
const regPassword2 = document.querySelector('#reg-password2');
const registerMessage = document.querySelector('#register-message');

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  if (regUsername.value.trim() === "" || regUsername.value.trim().length < 3 || !regUsername.value.trim().match(/^[a-zA-Z]/)) {
    setError(regUsername, "Nom d'utilisateur invalide");
    valid = false;
  } else {
    setSuccess(regUsername);
  }

  if (regEmail.value.trim() === "" || !email_verify(regEmail.value.trim())) {
    setError(regEmail, "Email invalide");
    valid = false;
  } else {
    setSuccess(regEmail);
  }

  if (regPassword.value.trim() === "" || !password_verify(regPassword.value.trim())) {
    setError(regPassword, "Mot de passe trop faible");
    valid = false;
  } else {
    setSuccess(regPassword);
  }

  if (regPassword2.value.trim() === "" || regPassword.value.trim() !== regPassword2.value.trim()) {
    setError(regPassword2, "Les mots de passe ne correspondent pas");
    valid = false;
  } else {
    setSuccess(regPassword2);
  }

  if (valid) {
    registerMessage.style.display = "block";
    registerMessage.innerText = "🎉 Inscription réussie (test)";
  } else {
    registerMessage.style.display = "none";
  }
});

// ===== Fonctions communes =====
function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccess(elem) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

function email_verify(email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}

function password_verify(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);
}
