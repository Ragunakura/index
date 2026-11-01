const content = document.getElementById("content");

const readingTime = document.getElementById("readingTime");

content.addEventListener("input", () => {

    const words = content.value.trim().split(/\s+/).length;

    const minutes = Math.max(1, Math.ceil(words / 200));

    readingTime.textContent = minutes + " min";

});