import { auth } from "../firebase/firebase.js";

import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

console.log("auth.js loaded");

const signupForm = document.getElementById("signupForm");

console.log(signupForm);

signupForm.addEventListener("submit", function (e) {

    console.log("Form submitted");

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;
    const username = document.getElementById("username").value;
    console.log("Username:", username);

    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;

    }

    createUserWithEmailAndPassword(auth, email, password)

       .then(async (userCredential) => {

    console.log("Before:", userCredential.user.displayName);

    await updateProfile(userCredential.user, {
        displayName: username
    });

    console.log("After:", auth.currentUser.displayName);

    alert("🎉 Account Created Successfully!");

    window.location.replace("index.html");

})


        .catch((error) => {

            console.error("Firebase Error:", error);

            alert(error.message);

        });

});