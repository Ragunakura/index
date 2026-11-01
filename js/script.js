// ===============================
// Search Function
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const filter = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".blog-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = title.includes(filter) ? "block" : "none";

        });

    });

}

// ===============================
// Dark Mode
// ===============================

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}
// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}
// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}