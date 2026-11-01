
const translations = {
    de: {
        navStart: "Start",
        navProject: "Über das Projekt",
        navCompanies: "Unternehmen",
        eyebrow: "MEIN PERSÖNLICHES PROJEKT",
        headline: 'Die Zukunft beginnt<br>mit <span>einer Entscheidung.</span>',
        heroText: "Ich untersuche Unternehmen, entdecke spannende Lehrstellen und dokumentiere meine Erkenntnisse in diesem digitalen Projekt.",
        heroButton: "Unternehmen entdecken",
        projectEyebrow: "DAS PROJEKT",
        projectTitle: "Mehr als eine Lehrstellensuche.",
        projectText: "Dieses Projekt verbindet Berufsorientierung mit Webentwicklung. Für jedes Unternehmen erstelle ich ein eigenes Profil und untersuche die Ausbildung, das Arbeitsumfeld und besondere Eigenschaften des Betriebs.",
        companiesEyebrow: "ENTDECKEN",
        companiesTitle: "Unternehmensprofile",
        footerTitle: "Projekt Lehrstelle · 2026",
        footerText: "Ein persönliches Projekt zur Berufsorientierung und Webentwicklung."
    },

    en: {
        navStart: "Home",
        navProject: "About the Project",
        navCompanies: "Companies",
        eyebrow: "MY PERSONAL PROJECT",
        headline: 'The future begins<br>with <span>a decision.</span>',
        heroText: "I research companies, discover interesting apprenticeships and document my findings in this digital project.",
        heroButton: "Discover Companies",
        projectEyebrow: "THE PROJECT",
        projectTitle: "More than just an apprenticeship search.",
        projectText: "This project combines career orientation with web development. I create an individual profile for each company and explore its training programme, working environment and special characteristics.",
        companiesEyebrow: "EXPLORE",
        companiesTitle: "Company Profiles",
        footerTitle: "Apprenticeship Project · 2026",
        footerText: "A personal project about career orientation and web development."
    }
};

const params = new URLSearchParams(window.location.search);
const language = params.get("lang") === "en" ? "en" : "de";

document.documentElement.lang = language;

document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translation = translations[language][key];

    if (translation) {
        element.innerHTML = translation;
    }
});
