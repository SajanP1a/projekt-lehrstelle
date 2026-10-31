
async function loadCompanies() {
    const companyList = document.getElementById("company-list");

    try {
        // Liste aller Unternehmen laden
        const indexResponse = await fetch("data/firmen/index.json");

        if (!indexResponse.ok) {
            throw new Error("Unternehmensliste konnte nicht geladen werden.");
        }

        const companyIds = await indexResponse.json();

        // Alle Unternehmensdateien laden
        const companies = await Promise.all(
            companyIds.map(async (id) => {
                const response = await fetch(`data/firmen/${id}.json`);

                if (!response.ok) {
                    throw new Error(`Unternehmen ${id} konnte nicht geladen werden.`);
                }

                return await response.json();
            })
        );

        // Karten erstellen
        companyList.replaceChildren();

        companies.forEach(company => {
            const card = document.createElement("article");
            card.classList.add("company-card");

            const location = document.createElement("span");
            location.textContent = company.location;

            const title = document.createElement("h3");
            title.textContent = company.languages.de.title;

            const description = document.createElement("p");
            description.textContent =
                company.languages.de.chapters[0].content;

            const link = document.createElement("a");
            link.textContent = "Profil ansehen →";
            link.href = `profil.html?id=${encodeURIComponent(company.id)}&lang=de`;
            link.classList.add("company-link");

            card.append(location, title, description, link);
            companyList.appendChild(card);
        });

        if (companies.length === 0) {
            companyList.textContent = "Noch keine Unternehmensprofile vorhanden.";
        }

    } catch (error) {
        console.error("Fehler beim Laden:", error);

        companyList.textContent =
            "Die Unternehmensprofile konnten nicht geladen werden.";
    }
}

loadCompanies();

