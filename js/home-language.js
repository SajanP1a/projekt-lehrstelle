
const translations = {
    de: {
        navStart: "Start",
        navProject: "Über das Projekt",
        navCompanies: "Unternehmen",
        navDocs: "Dokumentation",
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
        footerText: "Ein persönliches Projekt zur Berufsorientierung und Webentwicklung.",
        docsEyebrow: "EINBLICKE",
        docsTitle: "Dokumentation & Entwicklung",
        docsText: "Hier dokumentiere ich meinen Entwicklungsprozess, meine Planung und den Einsatz von KI während des Projekts.",
        docsJournal: "Entwicklungsjournal",
        docsJournalText: "Meine Fortschritte, Erfahrungen und Erkenntnisse.",
        docsAI: "KI-Prompts & KI-Einsatz",
        docsAIText: "Beispiele meiner Prompts und wie ich KI als Werkzeug nutze.",
        docsRequirements: "Pflichtenheft",
        docsRequirementsText: "Ziele, Anforderungen und Funktionen des Projekts.",
        docsPlanning: "Projektplanung",
        docsPlanningText: "Planung und einzelne Entwicklungsphasen.",
        docsDesign: "Designkonzept",
        docsDesignText: "Gestaltung, Farben und Aufbau der Website.",
        docsArchitecture: "Technische Architektur",
        docsArchitectureText: "Dateistruktur und technischer Aufbau des Projekts.",
        docsOpen: "Dokument öffnen →"
    },

    en: {
        navStart: "Home",
        navProject: "About the Project",
        navCompanies: "Companies",
        navDocs: "Documentation",
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
        footerText: "A personal project about career orientation and web development.",
        docsEyebrow: "INSIGHTS",
        docsTitle: "Documentation & Development",
        docsText: "Here I document my development process, project planning and use of AI throughout the project.",
        docsJournal: "Development Journal",
        docsJournalText: "My progress, experiences and lessons learned.",
        docsAI: "AI Prompts & AI Usage",
        docsAIText: "Examples of my prompts and how I use AI as a tool.",
        docsRequirements: "Project Requirements",
        docsRequirementsText: "Project goals, requirements and features.",
        docsPlanning: "Project Planning",
        docsPlanningText: "Planning and individual development phases.",
        docsDesign: "Design Concept",
        docsDesignText: "Website design, colours and layout.",
        docsArchitecture: "Technical Architecture",
        docsArchitectureText: "Project file structure and technical setup.",
        docsOpen: "Open document →"
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
