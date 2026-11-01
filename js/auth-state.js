import { auth } from "../firebase/firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const guestNav = document.getElementById("guestNav");
const userNav = document.getElementById("userNav");
const welcomeUser = document.getElementById("welcomeUser");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {

    if (user) {

        guestNav.style.display = "none";

        userNav.style.display = "flex";

        welcomeUser.textContent = `Welcome, ${user.displayName}`;

    } else {

        guestNav.style.display = "flex";

        userNav.style.display = "none";

    }

});

logoutBtn.addEventListener("click", () => {

    signOut(auth).then(() => {

        window.location.href = "index.html";

    });

});