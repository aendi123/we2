# XSS
## Beschreiben Sie in wenigen Worten, was Cross-Site-Scripting ist.
Beim XSS kann ein Benutzer über verschiedene Wege (beispielsweise User Input) bösartiges JavaScript auf eine legitime Website einschleusen. Der bösartige Code wird dann bei anderen Usern oder dem eigenen User im Browser ausgeführt, wenn auf die falsche Stelle der legitimen Website navigiert wird.
## Welche der folgenden Angriffe kann ein Angreifer mit XSS durchführen?
- Zugriff auf das lokale Dateisystem des Nutzers - Nein
- Zugriff auf Kamera und Mikrofon - Ja
- Auslesen der Browser-History - Nein
- Öffnen einer P2P-Verbindung - Ja
- Speichern von Daten im Browser - Ja
- Auslesen des Session-Cookie - Ja
- Lokalisierung des Clients (Position auslesen) - Ja
## Was bewirkt die Nutzung von drei geschweiften Klammern (z.B. {{{username}}} ) in einem Handlebars-Template? In welchen Kontexten kann dies zu einer XSS Vulnerability führen?
Es bewirkt, dass der Inhalt der Variable (hier username) nicht mit HTML Entities sanitized wird. Somit wird z.B. ein \<script\> Tag als solcher behandelt und nicht nur so angezeigt.
## Warum (wie) hilft das Setzen des httpOnly Flags bei Session-Cookies gegen XSS-Angriffe?
Wenn das httpOnly Flag gesetzt ist, kann JavaScript nicht auf die Cookies zugreifen. Somit können selbst bei einem erfolgreichen XSS Angriff keine Session-Cookies ausgelesen und versendet werden.
# Broken Access Control
## Beschreiben Sie: Wie kann bei einem Express Server eine "Insecure Direct Object Reference" Vulerability entstehen? Wie wird die Abhilfe in einem Express Server implementiert?
Die Verwundbarkeit entsteht, wenn ein Objektzugriff nur über die URL codiert ist und nicht separat sichergestellt wird, dass der aktuell eingeloggte User Zugriffsrechte hat. Als Gegenmassnahme sollte eine Middleware implementiert werden, die für jede Anfrage unter einem bestimmten Pfad prüft, ob der eingeloggte User berechtigt ist.
## Wie funktioniert ein CSRF Angriff und wie kann die Gefahr solcher Angriffe verringert werden?
Bei einem CSRF Angriff wird ausgenutzt, dass der Benutzer auf einer Website gerade eingeloggt ist. Der User muss auf eine manipulierte Seite gebracht werden, wo er dann ein gefälschtes Formular an die Website submitted, in die er eingeloggt ist. Es kann verhindert werden, indem man Formulare mit einen CSRF Token versieht. Das gefälschte Formular hat keine Möglichkeit, an so einen Token zu kommen und fällt bei der Prüfung des Submits durch.
## Warum sollten Passworter nicht als Plain-Text als URL Query-Parameter (Form get) übertragen werden?
Wenn die Verbindung nicht verschlüsselt ist, kann mit einem Network Sniffer das Passwort ausgelesen werden. Doch auch wenn die Verbindung verschlüsselt ist, ist das heikel. Es ist möglich, dass das Passwort in Server Logs oder der Browser History auftaucht und jemand Zugriff darauf erhält.
# Eval
## Welche Gefahren birgt Eval auf dem Server und auf dem Client?
Das Argument für eval wird ausgeführt, es könnte auch bösartiges JavaScript anstatt z.B. eine Zahl enthalten.
- Server: Beispielsweise könnte der Prozess beendet werden.
- Client: Bösartiger Code z.B. zum Session-Cookies stehlen könnte ausgeführt werden.
## Welche der folgenden Angriffe kann ein Angreifer mit Eval auf dem Node-Server durchführen?
- Zugriff auf das lokale Dateisystem - Ja
- Auslesen der Browser-History - Nein
- Öffnen einer P2P-Verbindung - Ja
- Auslesen der Session - Ja
- Zugriff auf das Dateisystem des Benutzers - Nein
- Zugriff auf Server-Konfiguration - Ja
- Zugriff auf angebundene Datenbanken - Ja
## Warum gibt es in JavaScript und PHP "eval()" und in Java nicht?
Weil Java statically und nicht dynamically typed ist.
# Passwörter
- Ähnlichkeiten von Magic-Link und FIDO-AuthN: man braucht kein Passwort, 
- Unterschiede von Magic-Link und FIDO-AuthN: Magic-Link braucht nur eine E-Mail-Adresse, FIDO-AuthN braucht ein Gerät/Software, das Passkeys unterstützt
# CSP etc
- Ähnlichkeiten von CSPs und CORS: schränken Zugriff ein
- Unterschiede von CSPs und CORS: CSP regelt Zugriff auf Cookies, CORS schränkt Sites ein, die AJAX Requests auf die eigene Site machen dürfen
# Helmet
Helmet enthält 11 Security Module um verschiedene Angriffe gegen Express abzuwehren. Beispiele:
- helmet-csp: Aktiviert den CSP Header
- hsts: Aktiviert the Strict-Transport-Security Header
- x-xss-protection: Aktiviert den X-XSS-Protection HTTP Header