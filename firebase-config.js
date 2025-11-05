// firebase-config.js
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

 const firebaseConfig = {
    apiKey: "AIzaSyCfWgmp-EYvCohAYkNyru6vKhnN28Nwjmk",
    authDomain: "valideform.firebaseapp.com",
    projectId: "valideform",
    storageBucket: "valideform.firebasestorage.app",
    messagingSenderId: "660179163976",
    appId: "1:660179163976:web:3cd320500a3c111c69b17d",
    measurementId: "G-77N70FCMR0"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
