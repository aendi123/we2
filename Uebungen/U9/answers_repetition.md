# XSS
## Beschreiben Sie in wenigen Worten, was Cross-Site-Scripting ist.
Beim XSS kann ein Benutzer über verschiedene Wege (beispielsweise User Input) bösartiges JavaScript auf eine legitime Website einschleusen. Der bösartige Code wird dann bei anderen Usern oder dem eigenen User im Browser ausgeführt, wenn zur falschen Stelle auf der legitimen Website navigiert wird.
## Welche der folgenden Angriffe kann ein Angreifer mit XSS durchführen?
- Zugriff auf das lokale Dateisystem des Nutzers - Nein
- Zugriff auf Kamera und Mikrofon - Ja (wenn im Browser erlaubt)
- Auslesen der Browser-History - Nein
- Öffnen einer P2P-Verbindung - Ja (z.B. WebRTC)
- Speichern von Daten im Browser - Ja (Local Storage)
- Auslesen des Session-Cookies - Ja (wenn kein HttpOnly Cookie)
- Lokalisierung des Clients (Position auslesen) - Ja (wenn im Browser erlaubt)
## Was bewirkt die Nutzung von drei geschweiften Klammern (z.B. {{{username}}} ) in einem Handlebars-Template? In welchen Kontexten kann dies zu einer XSS Vulnerability führen?
Es bewirkt, dass der Inhalt der Variable (hier username) nicht mit HTML Entities sanitized wird. Somit wird z.B. ein \<script\> Tag als solcher behandelt und nicht nur so angezeigt (Gefahr für XSS).
## Warum (wie) hilft das Setzen des httpOnly Flags bei Session-Cookies gegen XSS-Angriffe?
Wenn das httpOnly Flag gesetzt ist, kann JavaScript nicht auf die Cookies zugreifen. Somit können selbst bei einem erfolgreichen XSS Angriff keine Session-Cookies ausgelesen und versendet werden.
# Broken Access Control
## Beschreiben Sie: Wie kann bei einem Express Server eine "Insecure Direct Object Reference" Vulnerability entstehen? Wie wird die Abhilfe in einem Express Server implementiert?
Bei einem Express Server kann eine "Insecure Direct Object Reference" (IDOR) Vulnerability entstehen, wenn eine Anwendung es einem Angreifer ermöglicht, direkt auf Objekte oder Ressourcen zuzugreifen, die nicht für sie bestimmt sind. Dies kann passieren, wenn die Anwendung unzureichende Überprüfungen oder Berechtigungsprüfungen durchführt, bevor sie den Zugriff auf bestimmte Objekte oder Ressourcen zulässt.

Um die IDOR-Schwachstelle zu vermeiden, sollten Anwendungen sicherstellen, dass alle Anfragen auf Objekte oder Ressourcen durch eine angemessene Berechtigungsprüfung geprüft werden, bevor der Zugriff auf diese Ressourcen zugelassen wird. Dies kann durch die Implementierung von rollenbasierten Zugriffskontrollen (RBAC) oder anderen Methoden erreicht werden, die sicherstellen, dass nur autorisierte Benutzer auf die erforderlichen Ressourcen zugreifen können. Die Berechtigungsprüfung in einem Express Server wird typischerweise durch Middleware-Module.
## Wie funktioniert ein CSRF Angriff und wie kann die Gefahr solcher Angriffe verringert werden?
Bei einem CSRF Angriff wird ausgenutzt, dass der Benutzer auf einer Website gerade eingeloggt ist. Der User muss auf eine manipulierte Seite gebracht werden, wo er dann ein gefälschtes Formular an die Website submitted (z.B. indem er auf einen normal aussehenden Button klickt, der aber ein Form-Submit Button ist), in die er eingeloggt ist. Es kann folgendermassen verhindert werden: 
1. Man versieht Formulare mit einen CSRF Token. Das gefälschte Formular hat keine Möglichkeit, an so einen Token zu kommen und fällt bei der Prüfung des Submits durch.
2. Man verwendet SameSite Cookies. Der Browser verhindert dann, dass Cookies von Drittanbietern gesendet werden, es sei denn, der Benutzer interagiert direkt mit einer Drittanbieter-Website.
3. Man verwendet eine Content Security Policy (CSP). Dieser Mechanismus ermöglicht es, die Quellen von Ressourcen (Scripts, Bilder, Stylesheets) auf einer Website zu beschränken. Entwickler können so verhindern, dass Scripts von nicht vertrauenswürdigen Quellen auf ihrer Website ausgeführt werden.
## Warum sollten Passworter nicht als Plain-Text als URL Query-Parameter (Form get) übertragen werden?
Wenn die Verbindung nicht verschlüsselt ist, kann mit einem Network Sniffer das Passwort ausgelesen werden. Doch auch wenn die Verbindung verschlüsselt ist, ist das heikel. Es ist möglich, dass das Passwort in Server Logs oder der Browser History auftaucht und jemand Zugriff darauf erhält.
# Eval
## Welche Gefahren birgt Eval auf dem Server und auf dem Client?
Das Argument für eval wird ausgeführt, es könnte auch bösartiges JavaScript anstatt z.B. eine Zahl enthalten.
- Server: Alle Funktionen und Variablen von Node können benutzt werden, beispielsweise könnte der Prozess beendet werden.
- Client: Alle Funktionen des Browsers können benutzt werden,bösartiger Code z.B. zum Session-Cookies stehlen könnte ausgeführt werden.
## Welche der folgenden Angriffe kann ein Angreifer mit Eval auf dem Node-Server durchführen?
- Zugriff auf das lokale Dateisystem - Ja
- Auslesen der Browser-History - Nein
- Öffnen einer P2P-Verbindung - Nein (Verbindung zu anderem Server kann aufgebaut werden, das wird aber per Definition nicht als P2P bezeichnet)
- Auslesen der Session - Ja
- Zugriff auf das Dateisystem des Benutzers - Nein
- Zugriff auf Server-Konfiguration - Ja
- Zugriff auf angebundene Datenbanken - Ja
## Warum gibt es in JavaScript und PHP "eval()" und in Java nicht?
Java ist eine kompilierte Sprache und unterstützt das interpretieren von "neuem" Code zur Laufzeit nicht. PHP und JavaScript können das technisch und bieten es über die eval Funktion an.
# Passwörter
- Ähnlichkeiten von Magic-Link und FIDO-AuthN: man braucht kein Passwort, moderne Methoden, hohe Sicherheit, benutzerfreundlich
- Unterschiede von Magic-Link und FIDO-AuthN: Magic-Link braucht nur eine E-Mail-Adresse und ist einfach zum Implementieren, FIDO-AuthN verwendet eine hardwarebasierte Authentifizierungsmethode, die auf öffentlicher Schlüssel-Kryptographie basiert, braucht spezielle Hardware wie Sicherheitsschlüssel oder biometrische Geräte
# CSP etc
- Ähnlichkeiten von CSPs und CORS: wichtige Sicherheitskonzepte, erfordern HTTP Header zum Aktivieren/Konfigurieren, ermöglichen Kontrolle darüber, welche Ressourcen vom Browser geladen werden können und von wo aus
- Unterschiede von CSPs und CORS: CSP ist ein Richtlinie, um festzulegen, welche Ressourcen (z.B. Bilder, Skripte, Stile, Schriftarten) von welche Quellen (z.B. Domains) geladen werden dürfen, CORS ermöglicht es festzulegen, welche Anfragen von anderen Domains akzeptiert werden, CSP nutzt "Content-Security-Policy"-Header, während CORS den "Access-Control-Allow-Origin"-Header verwendet
# Helmet
Helmet enthält 11 Security Module um verschiedene Angriffe gegen Express abzuwehren. Beispiele:
- helmet-csp: Aktiviert den CSP Header
- hsts: Aktiviert the Strict-Transport-Security Header
- x-xss-protection: Aktiviert den X-XSS-Protection HTTP Header