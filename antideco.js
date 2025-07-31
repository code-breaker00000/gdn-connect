// antideco.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKca0kcjRqGJKkH4PMYIlA_CG29xgCcLA",
  authDomain: "gdn-connect.firebaseapp.com",
  databaseURL: "https://gdn-connect-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gdn-connect",
  storageBucket: "gdn-connect.firebasestorage.app",
  messagingSenderId: "101766902283",
  appId: "1:101766902283:web:5d091c5416a4a16f4c4d0e",
  measurementId: "G-KNQ509LQ6G"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Vérifie l'état d'authentification
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Si pas connecté -> redirection
    window.location.href = "index.html";
  }
});
