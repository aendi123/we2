# Accessibility
## Unterstützt der Color-Picker in den Chrome Dev-Tools bei der Analyse und Optimierung einer Webseite bezüglich Farbblindheit? Begründen Sie Ihre Antwort ausführlich. Welche anderen / weiteren Tools eignen sich für diese Aufgabe?
Der Color-Picker in den Chrome Dev-Tools unterstützt NICHT die Analyse und Optimierung einer Webseite bezüglich Farbblindheit. Color-Picker unterstützt "nur" bei der Analyse und Optimierung des Farbkontrasts (für Normalsichtige). Allerdings kann in den Dev-Tools unter "Rendering" der Modus "Emulate vision deficiencies" aktiviert werden und so die Seite bezüglich der Unterstützung Farbblinder Personen optimiert. Weitere Tools: Sim Daltonism, RGBlind, NoCoffee. werden.
## Welcher Accessibility Level enhält die strengeren Regeln bezüglich Farb-Kontrast? AAA oder AA?
AAA ist strenger
## Muss der Farbkontrast (Hintergrundfarbe vs. Vordergrundfarbe) bei kleinerer Fontgrösse grösser sein? Begründen Sie Ihre Antwort.
Ja, der Kontrast sollte grösser sein bei kleinerer Fontgrösse, weil kleine Fonts weniger dicke Striche (weniger Pixel) haben und dadurch weniger natürlicher Kontrast zum Hintergrund erzeugen. Jedoch sollten auch grosse Fonts guten Kontrast aufweisen.
## Kann "Lighthouse" erkennen ob der Kontrast von Placeholder-Text angemessen ist?
Nein, Lighthouse emuliert ein Gerät, welches die Bilder anzeigen kann und den Placeholder Text nie sieht.
## Erklären Sie das Lighthouse Kriterium "Offscreen Content is hidden from assistive technology": Was sollte (oder sollte nicht) der Fall sein, damit dieses Kriterium erfüllt ist? Geben Sie ein Beispiel wie diese Kriterium nicht erfüllt sein kann
Offscreen Content sollte mit `aria-hidden` ausgezeichnet werden um deutlich zu machen, dass dieser Inhalt für Sehende nicht sichtbar ist.
## Erklären Sie das Lighthouse Kriterium "HTML 5 landmark elements are used to improve navigation": Was sollte (oder sollte nicht) der Fall sein, damit dieses Kriterium erfüllt ist? Geben Sie ein Beispiel wie diese Kriterium nicht erfüllt sein kann.
HTML 5 Elemente wie `aside`, `footer`, `form`, `header`, `main`, `nav` und `section` sollte Seitenbereiche gemäss der Semantik dieser Elemente auszeichnen. Somit können Screenreader schnell zu den gewünschten Bereichen springen. Das Kriterium ist beispielsweise nicht erfüllt, wenn die Elemente nicht verwendet werden und einfach alles mit `div` gemacht ist.
## Müssen Bilder immer einen alt-Text haben?
Ja. Wenn die Bilder nur dekorativ sind sollte `alt=""` gesetzt sein und sie können zusätzlich mit `aria-hidden` ausgezeichnet werden.
## Erklären Sie das von Access-For-All genutzte "2 Sinne Kriterium".
Alle Multimedia-Inhalte können auch mit einem alternativen Sinn konsumiert werden.
Bilder: Sehen oder Alt-Text
Audio: Hören oder Untertitel
Video: Sehen&Hören oder Audiodeskriptionen
## Was ist der Web-Rotor in Screen Readern? Was erleichtert dieser.
Der Web-Rotor extrahiert wichtige Informationen aus der Web-Seite und zeigt durchsuchbare Übersichts-Listen von Links, Headings, Forms und Tabellen an. Zu diesen kann dann direkt aus dem Rotor gesprungen werden.
## Warum ist bei der Verwendung eines Screen-Readers wie MacOS-VoiceOver (mit "Web Rotor") die Regel zur HTML Accessibility "Navigation zuerst" weniger wichtig?
Im Web-Rotor werden Heading-Tags, Link-Tags etc angezeigt. Aus diesem Grund ist eine "Navigation von Hand" direkt in der Seite weniger relevant.
## Ratschläge erklären
### Keine Headings-Level auslassen
Das Springen zum nächsten Sibling-Heading oder Unter-Heading ist eine beliebte Art der Seitennavigation. Wenn ein Level fehlt, führt das zu Verwirrung.
### Semantic Elements richtig nutzen
Der Screenreader kann wenn gewünscht vom User direkt zu wichtigen Abschnitten wie `nav` oder `main` springen, wenn diese korrekt so bezeichnet sind. Auch die korrekten interaktiven Elemente wie `button`, `link` oder `input` zu verwenden ist wichtig, weil Screenreader beispielsweise zum nächsten Button springen können.
### Skip-Links (was ist das?) am Anfang der Seite
Ein Skip-Link am Anfang der Seite ermöglicht es dem Screenreader, direkt zur Hauptregion der Seite zu springen und dabei beispielsweise die Navigation und den Header zu überspringen. Sie sind für sehende Personen versteckt.
### lang Attribut korrekt setzen
Der Screenreader erkennt möglicherweise die Sprache falsch und liest dann den Text in einer falschen Sprache vor, was wahrscheinlich ziemlich skurril tönt. Mit den lang Attribut muss der Screenreader die Sprache nicht selbst erkennen.
## Kriterien an Beispielen erklären
### Tastaturbedienbarkeit
Suchfeld nicht mit Tab erreichbar
### Semantische Struktur
Alle Seitenbereiche mit `div` anstatt `main`, `nav`, `aside` usw. umgesetzt, keine `h2` Tags, aber `h1` und `h3` Tags vorhanden
### Multimedia/2-Sinne Prinzip
Audios haben kein Text-Transkript, Video ohne Untertitel mit wichtigen Informationen auf der Tonspur
### Kontrast
Vordergrund- und Hintergrundfarben haben Kontrast von weniger als 5.7:1
### Syntax/Kompatibilität
Website funktioniert in Chrome, aber nicht in Firefox, Links (a-Elemente) welche nicht wirklich Links sind
### Hilfestellung bei Interaktionen
Suchfeld ohne Label
## Gestalten für Benutzer mit anderen Schwächen
### Autismus
Live-Chats sollten nicht zu aufdringlich sein, in klarer Sprache ohne Redewendungen oder Metaphern schreiben
### Gehörlosigkeit
Audios und Videos haben Untertitel
### Leseschwäche
Text sollten einfach verständlich sein und nicht lang und komplex sein, Bilder und Diagramme zur Leseunterstützung einsetzen
## Inaccessible Table
Die Header Column ist in einem separaten Table. Dies verhindert sinnvolles Vorlesen der Tabellen-Zellen.
