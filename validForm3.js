// Récupération des éléments
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Événement
form.addEventListener('submit', e => {
    e.preventDefault();
    form_verify();
});

// Fonction principale
function form_verify() {
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();

    let formIsValid = true;

    // Username verify
    if (userValue === "") {
        setError(username, "Username ne peut pas être vide");
        formIsValid = false;
    } else if (!userValue.match(/^[a-zA-Z]/)) {
        setError(username, "Username doit commencer par une lettre");
        formIsValid = false;
    } else if (userValue.length < 3) {
        setError(username, "Username doit avoir au moins 3 caractères");
        formIsValid = false;
    } else {
        setSuccess(username);
    }

    // Email verify
    if (emailValue === "") {
        setError(email, "Email ne peut pas être vide");
        formIsValid = false;
    } else if (!email_verify(emailValue)) {
        setError(email, "Email non valide");
        formIsValid = false;
    } else {
        setSuccess(email);
    }

    // Password verify
    if (pwdValue === "") {
        setError(password, "Le mot de passe ne peut pas être vide");
        formIsValid = false;
    } else if (!password_verify(pwdValue)) {
        setError(password, "Mot de passe trop faible (8-12 caractères, chiffre et spécial)");
        formIsValid = false;
    } else {
        setSuccess(password);
    }

    // Password2 verify
    if (pwd2Value === "") {
        setError(password2, "Confirme ton mot de passe");
        formIsValid = false;
    } else if (pwdValue !== pwd2Value) {
        setError(password2, "Les mots de passe ne correspondent pas");
        formIsValid = false;
    } else {
        setSuccess(password2);
    }

    // Message global
    const formMessage = document.querySelector('#form-message');
    if (formIsValid) {
        formMessage.style.display = "block";
        formMessage.innerText = "🎉 Formulaire validé avec succès !";
    } else {
        formMessage.style.display = "none";
    }
}

// Fonctions utilitaires
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
