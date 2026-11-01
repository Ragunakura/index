import { db } from "../firebase/firebase.js";

import {
    doc,
    getDoc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Get Story ID from URL
const params = new URLSearchParams(window.location.search);
const storyId = params.get("id");

console.log("Story ID:", storyId);

// Stop if no ID was passed
if (!storyId) {
    alert("Story not found.");
    throw new Error("No story ID found in URL.");
}

try {

    const storyRef = doc(db, "stories", storyId);

    // Increase view count
    await updateDoc(storyRef, {
        views: increment(1)
    });

    // Get updated document
    const storySnap = await getDoc(storyRef);

    if (storySnap.exists()) {

        const story = storySnap.data();

        document.getElementById("storyTitle").textContent = story.title;

        document.getElementById("storyAuthor").textContent =
            "✍️ " + story.author;

        document.getElementById("storyCategory").textContent =
            "📂 " + story.category;

        document.getElementById("storyContent").textContent =
            story.content;

        document.getElementById("storyLikes").textContent =
            "❤️ " + story.likes;

        document.getElementById("storyViews").textContent =
            "👁️ " + story.views;

    } else {

        document.getElementById("storyTitle").textContent =
            "Story Not Found";

        document.getElementById("storyContent").textContent =
            "This story does not exist.";

    }

} catch (error) {

    console.error("Error loading story:", error);

    alert("Failed to load story.");

}