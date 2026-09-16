// Mobile menu toggle
function toggleMenu() {
    const nav = document.querySelector(".navbar nav");
    nav.classList.toggle("active");
}

// Search resources dynamically
function searchResources() {
    const input = document.getElementById("searchInput");
    const searchText = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".resource-card, .project-card");

    cards.forEach(function(card) {
        const text = card.innerText.toLowerCase();
        if (text.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Close mobile menu automatically after clicking a nav link
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        const nav = document.querySelector(".navbar nav");
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
        }
    });
});
