
async function loadCompanies() {
    const companyList = document.getElementById("company-list");

    // Gewählte Sprache aus der URL lesen
    const params = new URLSearchParams(window.location.search);
    const language = params.get("lang") === "en" ? "en" : "de";

    // Texte für die Unternehmensübersicht
    const texts = {
        de: {
            profile: "Profil ansehen →",
            empty: "Noch keine Unternehmensprofile vorhanden.",
            error: "Die Unternehmensprofile konnten nicht geladen werden."
        },
        en: {
            profile: "View profile →",
            empty: "No company profiles available yet.",
            error: "The company profiles could not be loaded."
        }
    };

    try {
        const indexResponse = await fetch("data/firmen/index.json");

        if (!indexResponse.ok) {
            throw new Error("Unternehmensliste konnte nicht geladen werden.");
        }

        const companyIds = await indexResponse.json();

        const companies = await Promise.all(
            companyIds.map(async (id) => {
                const response = await fetch(`data/firmen/${id}.json`);

                if (!response.ok) {
                    throw new Error(`Unternehmen ${id} konnte nicht geladen werden.`);
                }

                return await response.json();
            })
        );

        companyList.replaceChildren();

        companies.forEach(company => {
            const languageData =
                company.languages[language] || company.languages.de;

            const card = document.createElement("article");
            card.classList.add("company-card");

            const location = document.createElement("span");
            location.textContent = company.location;

            const title = document.createElement("h3");
            title.textContent = languageData.title;

            const description = document.createElement("p");

            const firstChapter = languageData.chapters[0];
            const content = firstChapter.content;

            description.textContent = Array.isArray(content)
                ? content.join(" ")
                : content;

            const link = document.createElement("a");
            link.textContent = texts[language].profile;
            link.href = `profil.html?id=${encodeURIComponent(company.id)}&lang=${language}`;
            link.classList.add("company-link");

            card.append(location, title, description, link);
            companyList.appendChild(card);
        });

        if (companies.length === 0) {
            companyList.textContent = texts[language].empty;
        }

    } catch (error) {
        console.error("Fehler beim Laden:", error);

        companyList.textContent = texts[language].error;
    }
}

loadCompanies();
