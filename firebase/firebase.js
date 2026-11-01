// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9GP5ez9n3MVu6IhmM63AUZGKFep_DAs4",
  authDomain: "wordharbour-95258.firebaseapp.com",
  projectId: "wordharbour-95258",
  storageBucket: "wordharbour-95258.firebasestorage.app",
  messagingSenderId: "207209624519",
  appId: "1:207209624519:web:a20ebc42697efa8964dfe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);
const db = getFirestore(app);


// Export auth so other JavaScript files can use it
export { auth, db };

console.log("✅ Firebase Connected");