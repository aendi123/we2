# Internationalization
## Studierende können …
### …​ den Unterschied von Internationalisierung, Lokalisierung und Übersetzung erklären.
*Internationalisierung*: beschreibt eine Methode, Software so zu programmieren, dass alle Benutzerausgaben per Spracheinstellung ausgetauscht werden können, anstatt fest einprogrammiert zu sein

*Lokalisierung*: Inhalte den sprachlichen und kulturellen Eigenheiten einer bestimmten Zielkultur bzw. eines bestimmten Landes anpassen

*Übersetzung*: Arbeit der Übersetzer, welche die ursprünglich während der Programmierung erstellten Zeichenketten und Inhalte einer Software in eine andere Sprache übersetzen
### …​ das Konzept von «Locale» erklären.
String, der eine Sprachregion (Sprach- und Landeseinstellung) bestimmt
### …​ wichtige Unterschiede von Sprachregionen erklären sowie welche Aspekte sich für halbautomatische Anpassung eignen und welche nicht.
- Andere Sprachen
-> Wort für Wort übersetzen?
- Andere Alphabete und Zahlen
- Andere Geni -> Anpassung Artikel + Adjektive, …
- Andere Pluralbildung 
-> Arabisch: 0, 1, 2, einige, viele
-> 0 -> Verneinung -> Satzumstellung
- Andere Schreibrichtung
- Andere Länge von Wörtern
(Bat -> Fledermaus, Beautiful -> schön)
- Andere Währungssymbole
- Andere Schreibweise von Zahlen- und Geldbeträgen
- Andere Regeln für Satzzeichen
- Nicht das Konzept von Vorname / Nachname
- Andere Höflichkeitsformen (Sie, Titel, ...)
- Andere Schreibweise von Adressen
- Andere Schreibweise von Telefonnummern
- Andere Farbsymbolik
- Andere Werte / Sprichwörter / Redewendungen
- Wording auf Labels anpassen
- Text auf Buttons anpassen
- Andere Datums- und Zeitformatierung
- Formulare anpassen
- Tipps/Mitteilungen/Hilfe anpassen
- Andere Postleitzahlen
- Stadt/Staat <-> Stadt/Kanton
- Platzhalter für: Firmenname, Email, Telefon, PLZ, Stadt
- Maske für: PLZ, Telefon
- Steuern berechnen
- Regulatorische Anforderungen (GDPR/CCPA)
- Andere Anführungszeichen
- Andere Kalender
- Spezielle Inhalte anpassen: Sounds, Bilder, Icons, Layout
- Masseinheiten und Umrechnung
- Lesereihenfolge
#### Geeignet für halbautomatische Anpassung
- Plural-Anpassung
- Konsistente Übersetzung von bspw. Ländernamen
- Sprachsensitiver Stringvergleich (z.B. kommt ä vor z in Schwedisch, aber nach z in Deutsch)
- Datum und Zeit (relativ und absolut)
- Zahlen und Geldbeträge
- Aufzählungen
- Plural-Regeln
### …​ erklären warum Internationalisierung bedeutet, dass das Layout flexibel gestaltet werden muss.
- *Textlänge*: Die Übersetzung eines Textes von einer Sprache in eine andere kann zu einer Änderung der Textlänge führen. Das Layout muss in der Lage sein, diese Änderungen zu bewältigen, ohne dass der Text abgeschnitten wird oder das Layout zerstört wird.
- *Schriftsysteme*: Unterschiedliche Schriftsysteme können unterschiedliche Anforderungen an das Layout stellen. Zum Beispiel können einige Schriftsysteme von rechts nach links gelesen werden, was bedeutet, dass das Layout umgekehrt werden muss.
- *Formatierung von Daten*: Verschiedene Regionen haben unterschiedliche Konventionen für die Formatierung von Daten wie Datumsangaben, Zahlen und Währungen. Ein flexibles Layout muss in der Lage sein, diese Unterschiede zu berücksichtigen.
- *Andere Kulturen*: Verschiedene Kulturen bevorzugen veschiedene Layouts. In China haben die Leute Buttons lieber an einem anderen Ort als in Europa.
### … Beispiele geben warum eine Anpassung von Adresseingaben auf das jeweilige Land sinnvoll ist.
1. *Formatunterschiede*: Die Formatierung von Adressen variiert weltweit. In den USA beispielsweise wird die Hausnummer vor dem Straßennamen angegeben, während in vielen anderen Ländern die Reihenfolge umgekehrt ist. Einige Länder verwenden Regionen oder Provinzen in ihren Adressen, andere nicht.
2. *Validierung*: Durch die Anpassung der Adresseingabe an das jeweilige Land können Sie sicherstellen, dass die eingegebenen Daten gültig sind. Sie können beispielsweise überprüfen, ob die Postleitzahl dem Format entspricht, das in diesem Land verwendet wird.
3. *Benutzerfreundlichkeit*: Es ist benutzerfreundlicher, wenn das Formular zur Adresseingabe dem entspricht, was die Benutzer gewohnt sind. Dies kann dazu beitragen, Fehler zu vermeiden und die Benutzerzufriedenheit zu erhöhen.
### …​ erklären was der Einsatzbereich der folgenden Objekte ist und den Output entsprechend Beispielen in den Folien vorhersagen
#### Intl.DisplayNames (Konstruktor)
Konsistente Übersetzung von Sprache, Region und Script Displaynamen
#### Intl.Collator (Konstruktor)
Sprachsensitiver String-Vergleich
#### Intl.DateTimeFormat (Konstruktor)
Sprachsensitives Datums- und Zeitformat
#### Intl.RelativeTimeFormat (Konstruktor)
Sprachsensitives relatives Zeitformat
#### Intl.NumberFormat (Konstruktor)
Sprachsensitive Formatierung von Zahlen und Geldbeträgen
#### Intl.ListFormat (Konstruktor)
Aufzählungen sprachsensitiv verknüpfen
#### Intl.PluralRules (Konstruktor)
Plural-sensitive Formatierung
#### Intl.Locale (Konstruktor)
Eingebaute Property, die einen Unicode Locale Identifier darstellt