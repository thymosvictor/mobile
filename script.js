document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const eventCards = document.querySelectorAll(".card");

    -
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        eventCards.forEach(card => {
            const eventName = card.querySelector("h3").textContent.toLowerCase();
            const eventLocation = card.querySelector("p").textContent.toLowerCase();
            const eventDate = card.querySelector("span").textContent.toLowerCase();

            if (eventName.includes(searchTerm) || eventLocation.includes(searchTerm) || eventDate.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

  
    const buttons = document.querySelectorAll("footer .buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`Você clicou em: ${button.textContent.trim()}`);
        });
    });
});
