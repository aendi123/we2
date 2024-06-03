# Übung Sass (SCSS)
## Aktuell gibt es nur einen SCSS Präprozessor aber keinen SCSS Polyfill
### Was würde ein SCSS Polyfill machen?
Runtime Interpretation / JIT des SCSS Codes -> CSS
### Warum ist dies nicht sinnvoll?
- Code des SCSS->CSS Compilers müsste geladen werden (lange Ladezeit besonders bei schlechtem Netz)
- Nach dem Compile-Schritt und dem nachfolgenden Einsetzen des kompilierten CSS gibt es denn allseits geflüchteten "flash of unstyled content"
- Bei Runtime-Modifikation des SCSS würde der ganze Kreislauf nochmals starten
## Sagen sie voraus was der Output nach der Anwendung von Sass ist
### 2a
```css
.home-button, .back-button {
    margin: 5px;
    border-radius: 2px;
    color: whitesmoke;
    background-color: black;
}

.home-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.back-button {
    background-color: #1a1a1a;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
```
### 2b
```css
.home-button2 {
    margin: 5px;
    border-radius: 2px;
    color: whitesmoke;
    background-color: black;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.back-button2 {
    margin: 10px;
    border-radius: 2px;
    color: whitesmoke;
    background-color: black;
    background-color: #1a1a1a;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
```
### 2c
#### Mixin
- Falls Parameter benötigt werden -> es werden Parameter verwendet beim button-mix
- Generiert weniger CSS-Selektoren -> nur 2 statt 3
- Generiert grösseres CSS-File -> Attribute werden 2x statt 1x mit grösserem Selektor gesetzt
- Verständlicher CSS-Code -> kein Komma, evtl.
#### Extends/Inheritance
- Generiert weniger CSS-Code -> Attribute werden 1x mit grösserem Selektor anstatt 2x gesetzt
- Nur verwenden für thematisch verwandte Vererbung z.B. Icon-Vererbung -> trifft zu
## Wo ist der Fehler? Was ist das Resultat?
es müsste statt .#$type-left/.#$type-right #{$type}-left / #{$type}-right sein, und es fehlt das { nach #$type-left
```css
button-left {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: whitesmoke;
  background-color: black;
}

button-right {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: whitesmoke;
  background-color: black;
}
```
## Wo ist der Fehler? Was ist das Resultat?
Es müsste em(20px) statt em(20) sein
```css
.top-nav > .home-button, .top-nav > .back-button {
  font-size: 1.25em;
}
```