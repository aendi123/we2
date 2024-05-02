# Test-Smells
## Erkläre warum der Code des folgenden Test-Cases problematisch ist und was getan werden sollte um den Test-Case zu verbessern.
In der Vorlesung ist der Code als Beispiel für einen "obscure test" eingeführt worden. Das heisst, das Problem ist, dass so viele Aktionen in der Exercises-Phase stattfinden, dass es schwierig ist direkt zu sehen warum dies sinnvolle Aktionen für den Test sind.

Der gleiche Test (should return the last added element) könnte mit viel weniger Aktionen ausgeführt werden. Es kann sogar ganz auf die Exercise-Phase ganz verzichtet werden indem nur überprüft wird ob ein Element welches im Setup hinzugefügt wurde auch wieder ausgelesen werden kann.