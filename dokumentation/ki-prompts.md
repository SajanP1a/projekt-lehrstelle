# Dokumentation der KI-Nutzung

## 1. Ziel der KI-Nutzung

Während der Entwicklung des Projekts Lehrstelle verwende ich KI-Werkzeuge als Unterstützung beim Lernen, Planen und Programmieren.

Die KI soll mir helfen, Zusammenhänge zu verstehen und Probleme zu lösen. Die Entwicklung und Kontrolle des Projekts bleiben meine Verantwortung.

## 2. Verwendete KI-Werkzeuge

| Werkzeug | Einsatzbereich |
|---|---|
| ChatGPT | Planung, Erklärungen, Code-Unterstützung und Fehlersuche |
| Gemini | Zusätzliche Erklärungen und alternative Lösungsansätze |

## 3. Einsatzbereiche

### Projektplanung
KI wurde verwendet, um Ideen zu strukturieren und die Anforderungen des Projekts zu formulieren.

### Programmierung
KI unterstützte beim Verständnis von HTML, CSS, JavaScript und JSON sowie bei der Entwicklung einzelner Funktionen.

### Fehlersuche
Bei Problemen wurden Fehlermeldungen und Codeabschnitte untersucht. Die vorgeschlagenen Lösungen wurden anschliessend selbst getestet.

### Dokumentation
KI unterstützte beim Strukturieren und Formulieren der Projektdokumentation.

## 4. Beispiele für verwendete Prompts

Die folgenden Beispiele zeigen typische Aufgabenstellungen. Sie sind als Beispiele dokumentiert und nicht zwingend wortgetreue Original-Prompts.

**Beispiel 1 – Projektstruktur**

„Hilf mir, eine sinnvolle Ordnerstruktur für eine zweisprachige Website mit HTML, CSS, JavaScript und JSON zu planen.“

**Beispiel 2 – JavaScript verstehen**

„Erkläre mir Schritt für Schritt, wie ich mit JavaScript JSON-Dateien laden und die Inhalte dynamisch auf einer Website anzeigen kann.“

**Beispiel 3 – Fehlersuche**

„Hilf mir herauszufinden, warum meine Firmenprofile nicht geladen werden. Erkläre mögliche Ursachen und wie ich sie selbst überprüfen kann.“

**Beispiel 4 – Dokumentation**

„Hilf mir, die technische Architektur meines Webprojekts verständlich zu dokumentieren.“

## 5. Eigene Arbeit und Verantwortung

Ich habe die Dateien selbst in Visual Studio Code angelegt, den Code in mein Projekt übernommen, die Website mit Live Server getestet und Fehler untersucht.

KI-Vorschläge wurden nicht einfach ungeprüft übernommen. Ich versuche, den Code zu verstehen und die Funktionen selbst erklären zu können.

## 6. Reflexion

Die Arbeit mit KI hat mir geholfen, neue technische Konzepte kennenzulernen und Probleme systematischer anzugehen.

Besonders wichtig ist für mich, KI nicht nur zum Erstellen von Code zu verwenden, sondern die Lösungen zu verstehen und selbstständig weiterentwickeln zu können.

## 7. Transparenz

KI wurde als unterstützendes Werkzeug eingesetzt. Die Verantwortung für den Inhalt, die Überprüfung der Informationen und die Funktionsfähigkeit der Website liegt bei mir.

---

**Stand:** 1. November 2026  
**Projekt:** Projekt Lehrstelle
## KI-Unterstützung bei der Weiterentwicklung

In diesem Projekt habe ich KI als Unterstützung beim Lernen, bei der Fehlersuche und bei der Weiterentwicklung meiner Website eingesetzt.

Die KI hat mir Codebeispiele, Erklärungen und Verbesserungsvorschläge geliefert. Ich habe die Vorschläge in meinem Projekt umgesetzt und anschliessend selbst getestet.

### Beispiel 1: Dynamisches Laden von Unternehmensprofilen

**Ziel:** Unternehmensdaten aus JSON-Dateien laden und automatisch als Karten auf der Startseite anzeigen.

**Verwendeter Prompt:**

> Hilf mir dabei, meine Unternehmensprofile dynamisch aus einer zentralen JSON-Datei zu laden. Erkläre mir den JavaScript-Code Schritt für Schritt, damit ich verstehe, wie fetch(), Promise.all() und die Erstellung von HTML-Elementen funktionieren.

**Umsetzung:** Die Unternehmensprofile werden anhand ihrer IDs aus `data/firmen/index.json` geladen.

### Beispiel 2: Englische Version der Startseite

**Ziel:** Die Startseite soll auf Deutsch und Englisch verfügbar sein.

**Verwendeter Prompt:**

> Hilf mir dabei, meine bestehende HTML-Startseite zweisprachig zu machen. Ich möchte zwischen Deutsch und Englisch wechseln können. Verwende JavaScript und URL-Parameter und erkläre mir die Änderungen.

**Umsetzung:** Ich habe `js/home-language.js` erstellt und die HTML-Elemente mit Sprachkennzeichnungen versehen.

### Beispiel 3: Sprachabhängige Unternehmensübersicht

**Ziel:** Die Unternehmensinformationen und Profil-Links sollen die ausgewählte Sprache verwenden.

**Verwendeter Prompt:**

> Passe meinen bestehenden JavaScript-Code so an, dass die Unternehmensübersicht abhängig vom URL-Parameter lang die deutschen oder englischen JSON-Daten verwendet. Auch der Link zum Unternehmensprofil soll die gewählte Sprache übernehmen.

**Umsetzung:** Ich habe `js/main.js` angepasst und die deutsche und englische Version online getestet.

### Beispiel 4: Fehlersuche und Verständnis

**Ziel:** Fehler nicht nur beheben, sondern verstehen.

**Verwendete Arbeitsweise:**

> Erkläre mir, warum mein Code nicht wie erwartet funktioniert. Zeige mir, welche Stellen dafür verantwortlich sind und wie ich sie verbessern kann. Erhalte dabei möglichst viel von meiner bestehenden Struktur.

**Umsetzung:** Ich habe meinen bestehenden Code geteilt, die Ursachen nachvollzogen und die vorgeschlagenen Änderungen getestet.

### Grundsätze meines KI-Einsatzes

- Ich verwende KI als Lern- und Entwicklungshilfe.
- Ich versuche, den vorgeschlagenen Code zu verstehen.
- Ich teste Änderungen selbst.
- Ich überprüfe, ob die Änderungen mit meiner bestehenden Website funktionieren.
- Ich dokumentiere wichtige KI-Unterstützung und Entwicklungsschritte.

**Hinweis:** Die Prompts in diesem Dokument sind dokumentierte Beispiele beziehungsweise sinngemässe Zusammenfassungen meiner Arbeitsaufträge. Sie sind nicht zwingend wortgetreue Kopien aller ursprünglichen Chat-Nachrichten.