
// URL-Parameter auslesen
const params = new URLSearchParams(window.location.search);

const companyId = params.get("id");
let currentLanguage = params.get("lang") || "de";

// Sprache auf gültige Werte begrenzen
if (!["de", "en"].includes(currentLanguage)) {
    currentLanguage = "de";
}

// Unternehmensprofil laden
async function loadProfile() {
    const chapterList = document.getElementById("chapter-list");

    try {
        if (!companyId) {
            throw new Error("Keine Unternehmens-ID angegeben.");
        }

        const response = await fetch(
            `data/firmen/${encodeURIComponent(companyId)}.json`
        );

        if (!response.ok) {
            throw new Error("Unternehmensdaten nicht gefunden.");
        }

        const company = await response.json();

        renderProfile(company);

    } catch (error) {
        console.error(error);

        chapterList.textContent =
            "Das Unternehmensprofil konnte nicht geladen werden.";
    }
}

// Profil anzeigen
function renderProfile(company) {
    const languageData = company.languages[currentLanguage];

    if (!languageData) {
        document.getElementById("chapter-list").textContent =
            "Diese Sprache ist nicht verfügbar.";
        return;
    }

    // Seitentitel und Überschriften
    document.documentElement.lang = currentLanguage;
    document.title = languageData.title + " | Projekt Lehrstelle";

    document.getElementById("company-name").textContent =
        languageData.title;

    document.getElementById("company-subtitle").textContent =
        languageData.subtitle;

    document.getElementById("company-location").textContent =
        company.location;

    // Kapitel erstellen
    const chapterList = document.getElementById("chapter-list");
    chapterList.replaceChildren();

    languageData.chapters.forEach((chapter, index) => {
        const article = document.createElement("article");
        article.classList.add("chapter-card");

        const heading = document.createElement("h2");
        heading.textContent =
            `${String(index + 1).padStart(2, "0")} · ${chapter.title}`;

        article.appendChild(heading);

        if (Array.isArray(chapter.content)) {
            const list = document.createElement("ul");

            chapter.content.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                list.appendChild(listItem);
            });

            article.appendChild(list);
        } else {
            const paragraph = document.createElement("p");
            paragraph.textContent = chapter.content;
            article.appendChild(paragraph);
        }

        chapterList.appendChild(article);
    });

    // Quellen anzeigen
    const sourceList = document.getElementById("source-list");
    sourceList.replaceChildren();

    company.sources.forEach(source => {
        const item = document.createElement("li");
        const link = document.createElement("a");

        link.href = source.url;
        link.textContent = source.title;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        item.appendChild(link);
        sourceList.appendChild(item);
    });

    // Sprachbuttons aktualisieren
    document.getElementById("lang-de").classList.toggle(
        "active",
        currentLanguage === "de"
    );

    document.getElementById("lang-en").classList.toggle(
        "active",
        currentLanguage === "en"
    );
}

// Sprache wechseln
function changeLanguage(language) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);

    window.location.href = url.toString();
}

document.getElementById("lang-de").addEventListener("click", () => {
    changeLanguage("de");
});

document.getElementById("lang-en").addEventListener("click", () => {
    changeLanguage("en");
});

// Profil starten
loadProfile();
