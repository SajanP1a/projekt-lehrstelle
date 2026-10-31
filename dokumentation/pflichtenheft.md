# Pflichtenheft – Projekt Lehrstelle

**Projekt:** Lehrstellen-Dossier  
**Dokument:** Pflichtenheft  
**Version:** 1.0  
**Status:** Entwurf  
**Technologien:** HTML, CSS, JavaScript, JSON, Markdown  
**Hosting:** GitHub Pages

---

## 1. Projektbeschreibung

### 1.1 Ausgangslage

Während der Lehrstellensuche müssen Informationen über verschiedene Unternehmen und Lehrstellen gesammelt, recherchiert und miteinander verglichen werden.

Diese Informationen sind häufig auf unterschiedlichen Websites verteilt. Dadurch wird es schwieriger, einen schnellen Überblick über die einzelnen Unternehmen und deren Ausbildungsangebote zu erhalten.

### 1.2 Projektidee

Mit diesem Projekt wird eine eigene Website entwickelt, welche die gesammelten Informationen über Unternehmen und Lehrstellen übersichtlich darstellt.

Für jedes Unternehmen und jede Lehrstelle wird ein eigenes Profil erstellt. Die Darstellung erfolgt über ein einheitliches Website-Design. Die jeweiligen Inhalte werden separat in JSON-Dateien gespeichert und durch JavaScript in die Website eingebunden.

Die Website wird über GitHub Pages öffentlich zugänglich gemacht.

### 1.3 Projektziele

Das Projekt verfolgt folgende Ziele:

- Eine übersichtliche Sammlung von Unternehmen und Lehrstellen erstellen.
- Informationen strukturiert recherchieren und darstellen.
- Interessante Fakten über Unternehmen kennenlernen.
- Die Besonderheiten einzelner Lehrstellen herausarbeiten.
- Eine eigene Website mit HTML, CSS und JavaScript entwickeln.
- KI als unterstützendes Werkzeug einsetzen und deren Ergebnisse überprüfen.
- Die gesamte Vorgehensweise in Markdown dokumentieren.
- Die eigenen technischen Fähigkeiten und die Arbeitsweise potenziellen Lehrbetrieben präsentieren.

---

## 2. Zielgruppen

Die Website richtet sich hauptsächlich an zwei Zielgruppen.

### 2.1 Hauptzielgruppe: Lehrstellensuchende

Die Website soll dabei helfen:

- Unternehmen besser kennenzulernen.
- Verschiedene Lehrstellen zu vergleichen.
- Interessante Fakten über Unternehmen zu entdecken.
- Die Besonderheiten einer Ausbildung zu verstehen.

### 2.2 Nebenzielgruppe: Lehrbetriebe

Potenzielle Lehrbetriebe sollen die Website als Arbeitsprobe nutzen können, um einen Einblick in folgende Fähigkeiten zu erhalten:

- Selbstständige Projektplanung.
- Programmierkenntnisse.
- Umgang mit HTML, CSS und JavaScript.
- Strukturierung und Verarbeitung von Daten.
- Sinnvoller Einsatz von künstlicher Intelligenz.
- Dokumentation und Problemlösung.

---

## 3. Funktionale Anforderungen

Funktionale Anforderungen beschreiben, welche Funktionen das System bereitstellen muss.

### 3.1 Startseite

Die Startseite ist der zentrale Einstiegspunkt der Website.

Sie muss folgende Funktionen und Inhalte bieten:

- Vorstellung des Projekts.
- Kurze Erklärung des Projektziels.
- Übersicht aller vorhandenen Firmenprofile.
- Möglichkeit, ein einzelnes Firmenprofil zu öffnen.
- Navigation innerhalb der Website.

### 3.2 Firmenübersicht

Die Firmenübersicht stellt alle recherchierten Unternehmen und Lehrstellen dar.

Jeder Eintrag soll mindestens folgende Informationen enthalten:

- Firmenname.
- Logo oder passendes Bild.
- Bezeichnung der Lehrstelle.
- Ausbildungsrichtung.
- Standort.
- Link zum vollständigen Firmenprofil.

### 3.3 Firmenprofile

Jedes Unternehmen beziehungsweise jede Lehrstelle erhält eine eigene URL.

Die Darstellung basiert auf einer gemeinsamen Vorlage. Dadurch wird sichergestellt, dass alle Profile ein einheitliches Erscheinungsbild besitzen.

Jedes Firmenprofil besteht aus fünf Kapiteln:

#### Kapitel 1 – Unternehmen

- Name des Unternehmens.
- Branche.
- Unternehmensgeschichte.
- Unternehmensgrösse.
- Standorte.
- Tätigkeitsbereiche.

#### Kapitel 2 – Interessante Fakten

- Spannende Informationen über das Unternehmen.
- Besondere Projekte.
- Unternehmensbesonderheiten.
- Überraschende oder weniger bekannte Fakten.

#### Kapitel 3 – Die Lehrstelle

- Berufsbezeichnung.
- Fachrichtung.
- Ausbildungsdauer.
- Ausbildungsinhalte.
- Typische Aufgaben.
- Anforderungen.
- Standort und Lehrbeginn.

#### Kapitel 4 – Was macht diese Lehrstelle einzigartig?

- Besondere Ausbildungsinhalte.
- Spezielle Lernmöglichkeiten.
- Besonderheiten des Unternehmens.
- Unterschiede zu vergleichbaren Lehrstellen.

#### Kapitel 5 – Arbeitsumfeld

- Unternehmenskultur.
- Arbeitsweise.
- Zusammenarbeit im Team.
- Besondere Vorteile für Lernende.
- Arbeitsumgebung.

### 3.4 Quellenverzeichnis

Am Ende jedes Firmenprofils wird ein Quellenverzeichnis angezeigt.

Anforderungen:

- Alle verwendeten Quellen werden aufgeführt.
- Quellen werden als Links dargestellt.
- Die Quellen sollen möglichst direkt zu den verwendeten Informationen führen.
- Offizielle Unternehmens- und Lehrstelleninformationen werden bevorzugt.

### 3.5 Mehrsprachigkeit

Die Website soll in zwei Sprachen verfügbar sein:

- Deutsch.
- Englisch.

Die Besucher sollen zwischen den beiden Sprachen wechseln können.

Dabei müssen sowohl die allgemeine Website als auch die Firmenprofile berücksichtigt werden.

---

## 4. Nichtfunktionale Anforderungen

Nichtfunktionale Anforderungen beschreiben die Qualitätsmerkmale des Systems.

### 4.1 Design

Die Website soll folgende Designmerkmale besitzen:

- Modern.
- Übersichtlich.
- Professionell.
- Einheitliche Gestaltung aller Firmenprofile.
- Klare visuelle Hierarchie.
- Gut lesbare Schriftarten.
- Einheitliche Abstände und Farben.

### 4.2 Benutzerfreundlichkeit

- Die Navigation soll einfach verständlich sein.
- Informationen sollen schnell auffindbar sein.
- Die Inhalte sollen übersichtlich gegliedert sein.
- Besucher sollen ohne technische Kenntnisse mit der Website umgehen können.

### 4.3 Responsivität

Die Website soll auf verschiedenen Bildschirmgrössen funktionieren.

Unterstützte Geräte:

- Desktop-PC.
- Laptop.
- Tablet.
- Smartphone.

### 4.4 Performance

- Die Website soll schnell laden.
- Bilder sollen in geeigneter Grösse eingebunden werden.
- Es sollen möglichst wenige externe Abhängigkeiten verwendet werden.

### 4.5 Öffentliche Zugänglichkeit

- Die Website wird über GitHub Pages veröffentlicht.
- Besucher benötigen kein Benutzerkonto.
- Die Website ist öffentlich erreichbar.
- Es werden keine privaten Bewerbungsunterlagen veröffentlicht.

---

## 5. Technische Anforderungen

### 5.1 Verwendete Technologien

| Technologie | Verwendungszweck |
|---|---|
| HTML | Struktur der Website |
| CSS | Gestaltung und Layout |
| JavaScript | Dynamische Darstellung und Datenverarbeitung |
| JSON | Speicherung der Firmeninformationen |
| Markdown | Projektdokumentation |
| GitHub | Versionsverwaltung und Repository |
| GitHub Pages | Veröffentlichung der Website |
| Visual Studio Code | Entwicklungsumgebung |

### 5.2 Architektur

Die Website verwendet eine gemeinsame Darstellungsvorlage.

Die Informationen der einzelnen Unternehmen werden separat gespeichert.

JavaScript übernimmt das Laden und Anzeigen der jeweiligen Daten.

Die Architektur besteht aus drei wesentlichen Bereichen:

1. **Darstellung:** HTML und CSS.
2. **Logik:** JavaScript.
3. **Daten:** JSON.

Dadurch können neue Firmenprofile hinzugefügt werden, ohne das grundlegende Website-Design neu programmieren zu müssen.

### 5.3 Projektstruktur

Vorgeschlagene Ordnerstruktur:

```text
projekt-lehrstelle/
│
├── README.md
│
├── index.html
├── profil.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── profil.js
│
├── data/
│   └── firmen/
│       └── schweizer-armee.json
│
├── assets/
│   ├── logos/
│   └── bilder/
│
└── dokumentation/
    ├── pflichtenheft.md
    ├── projektplanung.md
    ├── architektur.md
    ├── ki-prompts.md
    └── entwicklungsjournal.md
```

Diese Struktur ist ein erster Vorschlag und kann während der Entwicklung angepasst werden.

### 5.4 Datenverwaltung

Jedes Unternehmen erhält eine eigene JSON-Datei.

Die Daten werden unabhängig vom HTML-Code gespeichert.

Dadurch können die Informationen zentral gepflegt und durch JavaScript dynamisch dargestellt werden.

---

## 6. Dokumentation

Die Projektdokumentation wird vollständig mit Markdown erstellt und mit Visual Studio Code bearbeitet.

### 6.1 README.md

Die README-Datei dient als zentrale Projektvorstellung auf GitHub.

Sie enthält:

- Projektbeschreibung.
- Projektziele.
- Funktionen.
- Verwendete Technologien.
- Projektstruktur.
- Links zur veröffentlichten Website.
- Links zur ausführlichen Dokumentation.

### 6.2 Separate Dokumentationsdateien

Im Ordner `dokumentation/` werden zusätzliche Markdown-Dateien erstellt.

| Datei | Inhalt |
|---|---|
| pflichtenheft.md | Anforderungen an das Projekt |
| projektplanung.md | Planung und Vorgehensweise |
| architektur.md | Technischer Aufbau |
| ki-prompts.md | Verwendete KI-Prompts |
| entwicklungsjournal.md | Fortschritt, Probleme und Lösungen |

### 6.3 Dokumentation des KI-Einsatzes

Der Einsatz künstlicher Intelligenz wird transparent dokumentiert.

Für wichtige KI-Anfragen werden folgende Punkte festgehalten:

- Ziel der Anfrage.
- Verwendetes KI-Werkzeug.
- Verwendeter Prompt.
- Ergebnis der Anfrage.
- Überprüfung des Ergebnisses.
- Eigene Anpassungen und Verbesserungen.

---

## 7. Projektphasen

Das Projekt wird in mehreren Phasen umgesetzt.

| Phase | Beschreibung |
|---|---|
| 1. Planung | Anforderungen und Architektur festlegen |
| 2. Design | Gestaltung der Website planen |
| 3. HTML/CSS | Grundstruktur und Design entwickeln |
| 4. JavaScript | Daten laden und Profile dynamisch darstellen |
| 5. Recherche | Firmeninformationen sammeln und integrieren |
| 6. Mehrsprachigkeit | Deutsche und englische Inhalte integrieren |
| 7. Testen | Funktionen und Darstellung überprüfen |
| 8. Veröffentlichung | Website über GitHub Pages veröffentlichen |
| 9. Dokumentation | Entwicklungsprozess vervollständigen |

---

## 8. Qualitätskontrolle und Abnahmekriterien

Das Projekt gilt als erfolgreich umgesetzt, wenn folgende Anforderungen erfüllt sind:

- [ ] Die Startseite ist öffentlich erreichbar.
- [ ] Das Projekt wird auf der Startseite verständlich vorgestellt.
- [ ] Alle vorhandenen Firmenprofile werden in einer Übersicht angezeigt.
- [ ] Jedes Firmenprofil besitzt eine eigene URL.
- [ ] Die Firmenprofile verwenden ein einheitliches Design.
- [ ] Die Firmeninformationen werden aus JSON-Dateien geladen.
- [ ] Alle fünf vereinbarten Kapitel werden dargestellt.
- [ ] Quellen werden am Ende der Firmenprofile angezeigt.
- [ ] Die Website ist auf Deutsch und Englisch verfügbar.
- [ ] Die Website funktioniert auf Desktop, Tablet und Smartphone.
- [ ] Die README-Datei ist vollständig.
- [ ] Die zusätzliche Projektdokumentation ist öffentlich zugänglich.
- [ ] Die Website wurde auf Fehler überprüft.

---

## 9. Abgrenzung des Projekts

Folgende Funktionen sind nicht Bestandteil der ersten Version:

- Benutzerkonten und Anmeldung.
- Datenbank und Backend.
- Online-Bewerbungsfunktion.
- Automatische Bewerbungsversendung.
- Automatische Recherche durch die Website.
- Verwaltung persönlicher Bewerbungsunterlagen.

Der Schwerpunkt liegt auf einer statischen, öffentlich zugänglichen Website mit dynamischer Darstellung der gespeicherten Firmeninformationen.

---

## 10. Offene Punkte

Folgende Entscheidungen müssen während der weiteren Projektplanung noch getroffen werden:

- Wie wird die Sprache technisch umgesetzt?
- Sollen die deutschen und englischen Inhalte gemeinsam oder getrennt in JSON gespeichert werden?
- Wie werden die individuellen Profil-URLs aufgebaut?
- Wie werden neue Unternehmen in die Firmenübersicht aufgenommen?
- Welches konkrete Designsystem wird verwendet?
- Wie wird die Richtigkeit der recherchierten Informationen überprüft?

Diese Punkte werden im Laufe der Entwicklung konkretisiert.

---

## 11. Projektziel – Endergebnis

Am Ende soll eine moderne, zweisprachige und öffentlich zugängliche Website entstehen.

Sie ermöglicht es, verschiedene Unternehmen und deren Lehrstellen übersichtlich kennenzulernen.

Gleichzeitig dient das Projekt als persönliche Arbeitsprobe. Es dokumentiert die selbstständige Planung und Entwicklung einer Website sowie den bewussten und nachvollziehbaren Einsatz künstlicher Intelligenz.

**Das Projekt soll nicht nur ein fertiges Ergebnis zeigen, sondern auch den Weg dorthin nachvollziehbar machen.**
