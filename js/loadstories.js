import { db } from "../firebase/firebase.js";

import {
    collection,
    getDocs,
    orderBy,
    query
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const container = document.getElementById("storiesContainer");

async function loadStories() {

    container.innerHTML = "";

    const q = query(
        collection(db, "stories"),
        orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {

        const story = doc.data();

        container.innerHTML += `

        <div class="blog-card">

            <h2>${story.title}</h2>

            <p class="author">
                ✍ ${story.author}
            </p>

            <p>

                ${story.content.substring(0,150)}...

            </p>

            <p>

                ❤️ ${story.likes}

                👁 ${story.views}

            </p>

            <a href="story.html?id=${doc.id}">
                Read More →
            </a>

        </div>

        `;

    });

}

loadStories();