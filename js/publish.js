import { auth, db } from "../firebase/firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const publishBtn = document.getElementById("publishBtn");

publishBtn.addEventListener("click", async () => {

    // Make sure the user is logged in
    if (!auth.currentUser) {
        alert("Please log in first.");
        return;
    }

    // Get values from the editor
    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value.trim();
    const tags = document.getElementById("tags").value.trim();

    // Validation
    if (title === "" || content === "") {
        alert("Please enter both a title and your story.");
        return;
    }

    try {

        await addDoc(collection(db, "stories"), {

            title: title,
            category: category,
            content: content,
            tags: tags,

            author: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,

            createdAt: serverTimestamp(),

            likes: 0,
            views: 0,
            comments: 0

        });

        alert("🎉 Story published successfully!");

        // Clear the editor
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        document.getElementById("tags").value = "";

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});