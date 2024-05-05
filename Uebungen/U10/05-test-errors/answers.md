# Fehler in Test interpretieren
## Mach dich mit der Funktion ensureUserIdMiddleware im File mathTutorController.js vertraut. Beantworte:
### Was soll diese Funktion machen?
Die Funktion soll sicherstellen, dass in der Session der App ständig die Eigenschaft user gesetzt ist. Die Funktion überprüft zuerst, ob die User ID in der Session gesetzt ist. Wenn nicht, wird geprüft, ob der Client ein Cookie mit einem bestimmten Namen mitgeschickt hat. Dann wird die User ID aus diesem Cookie verwendet. Wenn nicht, wird ein neuer User erstellt und das Cookie mit der User ID an den Client geschickt.
### Erkläre warum die Art wie Cookies in der Funktion genutzt werden ein Sicherheitsrisiko darstellen kann.
Das Cookie kann von einem Angreifer beliebig abgeändert werden. Somit könnte die Session eines anderen Users übernommen werden, wenn man die User ID hat.
## Mach dich mit dem Test in mathTutorController.test.js vertraut. Beantworte:
### Ist dies ein Unit-Test? Begründe die Antwort.
Der Test in mathTutorController.test.js ist kein "reiner" Unit-Test, das Zusammenspiel zwischen der Funktion ensureUserIdMiddleware und userService wird getestet. Es ist aber auch kein vollständiger End-2-End Integration-Test, da der Zugriff auf die Datenbank (NEDB) abgekapselt wird.
### Was für ein Typ von Double ist die Funktion nextDouble?
nextDouble ist eine Spy-FUunktion: Es wird beobachtet wie häufig die Funktion aufgerufen wurde. Die Anzahl Aufrufe können im Nachhinein ausgelesen werden. Der Kontext von einem Node/Express RequestHandler mit "echter" next-Funktion existiert aber nicht.
### Handelt es sich hier um einen "async" Test?
Der Test ensureUserIdMiddleware ist kein asyc-Test. Dadurch, dass statt einem Fake-Objekt die nedb-Datenbank genutzt wird, werden die Callbacks nicht ausgeführt. Die Ausführung der Callback-Funktion aus dem Aufruf von Insert (insertArgs.callback) wird kontrolliert (und synchron) im Test ausgeführt.
### Es gibt keine einfache Methode wie die Funktion "sinon.spy" im Zusammenhang mit der NedbDouble Klasse im File mathTutorController.test.js genutzt werden kann. Erläre das Problem.
Das Problem bei der Nutzung der Funktion sinon.spy im Zusammenhang mit der NedbDouble Klasse ist, dass diese Funktion für die Nutzung mit Methoden von Instanzen (Objekten) gedacht ist. Die db-Instanz wird aber im userService erstellt und ist im mathTutorController.test.js nicht zugreifbar. Eine mögliche Lösung wäre im Konstruktor sinon.spy im Konstruktor der aktuellen NedbDouble Klasse für alle Methoden aufzurufen. Die Methoden selber könnten dann weiter abgespeckt werden (nur Stubs = leer).