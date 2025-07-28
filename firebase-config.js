// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Authentification et provider Google
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Base de données temps réel
export const db = getDatabase(app);
