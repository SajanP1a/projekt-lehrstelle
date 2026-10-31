# Technische Architektur – Projekt Lehrstelle

## 1. Überblick

Das Projekt Lehrstelle ist eine statische Website, die mit HTML, CSS, JavaScript und JSON umgesetzt wird.

Die Website benötigt kein eigenes Backend und keine Datenbank. Die Unternehmensinformationen werden in JSON-Dateien gespeichert und durch JavaScript geladen und dargestellt.

## 2. Verwendete Technologien

| Technologie | Aufgabe |
|---|---|
| HTML | Struktur und Inhalte der Webseiten |
| CSS | Gestaltung, Layout und responsive Darstellung |
| JavaScript | Dynamische Funktionen und Verarbeitung der Daten |
| JSON | Speicherung der Unternehmensinformationen |
| Git | Versionsverwaltung |
| GitHub | Speicherung des Projekts und Veröffentlichung |
| GitHub Pages | Hosting der Website |

## 3. Ordnerstruktur

```text
projekt-lehrstelle/
│
├── index.html
├── profil.html
├── README.md
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
│       ├── index.json
│       └── schweizer-armee.json
│
├── assets/
│   ├── bilder/
│   └── logos/
│
└── dokumentation/
    ├── pflichtenheft.md
    ├── projektplanung.md
    ├── designkonzept.md
    ├── entwicklungsjournal.md
    └── architektur.md
```

## 4. Aufbau der Website

### 4.1 Startseite – index.html

Die Startseite stellt das Projekt vor und zeigt eine Übersicht der vorhandenen Unternehmensprofile.

Die Datei `main.js` lädt die Firmenliste aus `data/firmen/index.json`. Anschliessend werden die einzelnen Unternehmensdateien geladen und als Karten auf der Startseite angezeigt.

### 4.2 Profilseite – profil.html

Die Profilseite verwendet eine gemeinsame Vorlage für alle Unternehmen.

Welches Unternehmen angezeigt wird, bestimmt ein URL-Parameter. Beispielsweise:

```text
profil.html?id=schweizer-armee&lang=de
```

Die Datei `profil.js` liest die Parameter aus, lädt die passende JSON-Datei und stellt die Informationen dar.

### 4.3 Gestaltung – style.css

Die Datei `style.css` enthält die Gestaltung der Website.

Dazu gehören:
- Farben und Schriftarten
- Navigation
- Karten und Inhaltsbereiche
- Abstände und Layout
- Responsive Darstellung
- Hover-Effekte und Animationen

## 5. Datenstruktur

Die Unternehmensinformationen werden getrennt vom HTML-Code in JSON-Dateien gespeichert.

### 5.1 Firmenindex – index.json

Diese Datei enthält die IDs der vorhandenen Unternehmensprofile.

Beispiel:

```json
[
    "schweizer-armee"
]
```

JavaScript verwendet diese Liste, um die vorhandenen Profile zu finden.

### 5.2 Unternehmensdaten – schweizer-armee.json

Jedes Unternehmen erhält eine eigene JSON-Datei.

Darin befinden sich die Informationen für die deutsche und englische Version sowie die fünf Profilkapitel und die Quellen.

Durch diese Trennung können neue Unternehmen hinzugefügt werden, ohne für jedes Unternehmen eine eigene HTML-Seite erstellen zu müssen.

## 6. Datenfluss

Der grundlegende Ablauf funktioniert so:

1. Der Besucher öffnet die Startseite.
2. `main.js` lädt `index.json`.
3. Die darin aufgeführten Unternehmensdateien werden geladen.
4. JavaScript erstellt die Profilkarten.
5. Der Besucher wählt ein Unternehmen aus.
6. Die Profilseite liest die Unternehmens-ID aus der URL.
7. `profil.js` lädt die passende JSON-Datei.
8. Die Inhalte werden auf der Profilseite angezeigt.

## 7. Mehrsprachigkeit

Die Website unterstützt Deutsch und Englisch.

Die Sprachinformationen sind direkt in den JSON-Dateien hinterlegt. Der URL-Parameter `lang` bestimmt, welche Sprache angezeigt wird.

Beispiele:

```text
profil.html?id=schweizer-armee&lang=de
profil.html?id=schweizer-armee&lang=en
```

## 8. Veröffentlichung

Das Projekt ist als statische Website geplant und kann über GitHub Pages veröffentlicht werden.

Die JSON-Dateien werden dabei zusammen mit den HTML-, CSS- und JavaScript-Dateien bereitgestellt.

**Wichtig:** Die Website muss über einen Webserver aufgerufen werden, damit das Laden der JSON-Dateien mit `fetch()` funktioniert. Für die lokale Entwicklung wird deshalb Live Server verwendet.

## 9. Erweiterbarkeit

Die Architektur ermöglicht es, weitere Unternehmen hinzuzufügen.

Dafür müssen grundsätzlich:
1. Eine neue JSON-Datei im Ordner `data/firmen/` erstellt werden.
2. Die ID des Unternehmens in `index.json` eingetragen werden.
3. Die Inhalte auf Deutsch und Englisch ergänzt werden.
4. Die Quellen überprüft und dokumentiert werden.

Die vorhandene Profilseite kann anschliessend auch für das neue Unternehmen verwendet werden.

---

**Stand:** 1. November 2026  
**Projekt:** Projekt Lehrstelle