# Aufgabe aus Prüfung Jan. 2019
## In der Vorlesung wurde unter dem Titel Cross-Site Scripting nur die Stored-Cross-Site-Scripting (S-XSS) Verwundbarkeit behandelt. Erklären Sie, welche Schritte (Angriffsvector) zur Ausnützung einer solchen Verwundbarkeit führen.
Der User muss irgendwo die Möglichkeit haben, Input zu geben, dieser Input muss auf dem Server gespeichert werden und ohne HTML-Escaping an unbeteiligte Besucher der Site zurückgegeben werden.
## Aufgrund der im Golem Artikel gegebenen Informationen kann man davon ausgehen, dass es sich beim identifizierten Problem nicht um eine Stored-Cross-Site-Scripting (S-XSS) Verwundbarkeit handelt. Erklären Sie welche Indizien darauf hinweisen. Beziehen Sie sich in Ihrer Antwort auf Ihre unter a) gegebene Beschreibung.
Der User Input im Suchfeld wird nicht gespeichert auf dem Server. Stattdessen wird er direkt dem User zurückgegeben, andere Nutzer sehen es nicht.
## Was hätte bei der Entwicklung beachtet werden sollen, damit das beobachtete Problem nicht auftritt?
Der User Input müsste sanitized werden vor der Rückgabe.
## Erklären Sie, was zusätzlich gegeben sein müsste, damit das im Artikel beschriebene Problem als eine Stored-Cross-Site-Scripting Verwundbarkeit klassifiziert werden kann.
Der Input müsste gespeichert und anderen Usern angezeigt werden. Beispiel Digitec: es wird gezeigt was andere Personen suchen
# Aufgabe aus Prüfung Sept. 2019
Keine Lösung vorhanden
# TopOverlooked-Security-Threats
Genannt in der PPP:
- CSRF Protection in Formularen (kommt vor in OWASP)
- Nicht GET für Statusmutation verwenden, weil CSRF Middleware diese Requests nicht prüft (kommt nicht vor in OWASP)
- X-Powered-By header deaktivieren (kommt vor in OWASP)
- Generic cookie names verwenden (verwendete Software nicht verraten durch session Cookie Namen) (kommt nicht vor in OWASP)
- Korrektes Escaping für HTML Body, HTML Attribute, CSS, JavaScript, URL und URL Parameter mithilfe von vertrauenswürdiger Library implementieren (kommt vor in OWASP)
- Auf Server und Client encoden (kommt nicht vor in OWASP)
- HttpOnly und Secure attribute beim Session Cookie verwenden
- CSP Header aktivieren (kommt vor in OWASP)
# worst piece of code ever
- Skaliert nicht, je mehr User desto langsamer
- var statt let/const
- "if ("true" === "true") { return false; }" ersetzen durch "return false;"
- Korrekte DOM Methoden im JS verwenden
- Das loggedin Cookie kann jeder erstellen und ist sehr unsicher, man müsste mit einem Session Cookie arbeiten, das überprüft wird