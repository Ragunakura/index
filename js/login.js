import { auth } from "../firebase/firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            alert("Welcome back!");

            window.location.replace("index.html");

        })

        .catch((error) => {

            alert(error.message);

        });

});