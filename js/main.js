
// Unternehmensprofile laden
async function loadCompanies() {
    const companyList = document.getElementById("company-list");

    try {
        // JSON-Datei abrufen
        const response = await fetch("data/firmen/schweizer-armee.json");

        if (!response.ok) {
            throw new Error("Die Unternehmensdaten konnten nicht geladen werden.");
        }

        const company = await response.json();

        // Unternehmenskarte erstellen
        const card = document.createElement("article");
        card.classList.add("company-card");

        const title = document.createElement("h3");
        title.textContent = company.languages.de.title;

        const description = document.createElement("p");
        description.textContent =
            company.languages.de.chapters[0].content;

        const location = document.createElement("span");
        location.textContent = company.location;

        const link = document.createElement("a");
        link.textContent = "Profil ansehen →";
        link.href = `profil.html?id=${encodeURIComponent(company.id)}&lang=de`;
        link.classList.add("company-link");

        // Elemente zusammensetzen
        card.appendChild(location);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        companyList.appendChild(card);

    } catch (error) {
        console.error("Fehler:", error);

        companyList.textContent =
            "Die Unternehmensprofile konnten momentan nicht geladen werden.";
    }
}

// Funktion beim Laden der Seite starten
loadCompanies();
