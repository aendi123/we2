# Web DevOps
## die Aufgabe und den Einsatzbereich von (CSS) Präprozessoren erklären.
- Software Engineering Prinzipien im CSS anwenden
- Besser wartbaren Code ermöglichen
- Umwandlung von nicht unbedingt CSS zu CSS
- Copy&Paste vermindern
- Modularisierung des CSS
- Wiederverwenden von Funktionalitäten ermöglichen
- Für grosse Projekte
- Browser-Kompatibilität sicherstellen
## Sass (SCSS) Code interpretieren (inkl. Variablen, Nesting, Mixing, Partials und Funktionen) und den aus Sass/SCSS Code den zugehörigen CSS Code generieren.
### Variablen
```css
$purple-navy: #635380;
$main-bg-color: $purple-navy;

body {
    background: $main-bg-color;
}
```
zu
```css
body {
    background: #635380;
}
```
### Nesting
```css
nav {
    ul {
        margin: 0; 
        > li {
            display: inline-block;
        }
        &:hover {
            color: green;
        }
    }
}
```
zu
```css
nav ul {
    margin: 0;
}
nav ul > li {
    display: inline-block;
}
nav ul:hover {
    color: green;
}
```
### Partials / Import
```css
// file _importvars.scss
$brand-color: rgb(255,0,0);

// file _usevars.scss
$accent-color: darken($brand-color, 10);

// file index.scss
@import 'importvars'
@use 'usevars'

h1 {
    color: rgb(255,0,0);
    background-color: darken($brand-color, 10);
}
```
zu
```css
h1 {
    color: $brand-color;
    background-color: usevars.$accent-color;
}
```
### Mixing
```css
@mixin border-radius($radius: 1em) {
    -moz-border-radius: $radius;
    border-radius: $radius;
}
.box {
    @include border-radius(1rem);
}
```
zu
```css
.box {
  -moz-border-radius: 1rem;
  border-radius: 1rem;
}
```
### Extend/Inheritance
```css
%icon {
    background-color: green;
}
.error-icon {
    @extend %icon;
    color: blue;
}
.info-icon {
    @extend %icon;
    color: red;
}
```
zu
```css
.error-icon, .info-icon {
    background-color: green;
}
.error-icon {
    color: blue;
}
.info-icon {
    color: red;
}
```
Wenn es `icon` statt `%icon` wäre im SCSS, wäre es im generierten CSS `.icon, .error-icon, .info-icon` statt `.error-icon, .info-icon`.
### Conditionals + Loops
```css
$width : 2px;
$breakpoints: 30em 46em;

@each $breakpoint in $breakpoints {
    @media all and (max-width : $breakpoint) {
        body{
            @if $breakpoint > 40em {
                width: $width;
            }
            @else{ 
                width: $width * 2;
            }
        }
    }
}
```
zu
```css
@media all and (max-width: 30em) {
    body {
        width: 4px;
    }
}

@media all and (max-width: 46em) {
    body {
        width: 2px;
    }
}
```
### Funktionen
```css
@function power($base, $expo) {
    $result: 1;
    @for $_ from 1 through $expo {
        $result: $result * $base;
    }
    @return $result;
}

.sidebar  {
    margin-left: power(6, 2) * 2px;
}
```
zu
```css
.sidebar {
    margin-left: 72px;
}

```
## Fehler in Sass/SCSS Code identifizieren und beheben, bzw. Lücken im Code füllen.
-
## mit Sass/SCSS Einheiten rechnen.
Sass rechnet mit Einheiten wie in der Physik.
2px + 2px = 4px
2 * 1px = 2px
(2 + px) * 2 = Error
2px / 1px = 2
2px + 1mm = 5.77953px
2px * 0 = 0px
10px * 10px = Error
10 + px = 10px
10 + 0px = 10px
0px / ((0 * 0px) +1px) = 0px / 1px = 0
## zwei spezifische Einsatzbereiche von PostCSS nennen.
- Autoprefixer: fügt automatisch Vendor-Prefixes zu CSS-Regeln hinzu, das erleichtert die Entwicklung, weil man sich nicht mit verschiedenen Browsern befassen muss
- CSS-Nano: minimiert und optimiert CSS-Dateien, was die Ladezeit der Site verbessert
## erklären in welchen Kontexten es sinnvoll ist Web-Build-Tools einzusetzen und zwei spezifische Features dieser Build Tools nennen.
### Sinnvolle Kontexte
- Grosse Projekte: bei vielen Dateien und Abhängigkeiten helfen Build-Tools dabei, Code zu organisieren, verwalten, minimieren und optimieren
- Häufige Aktualisierungen: die Automatisierung des Prozesses spart Zeit
- Komplexe Anwendungen: Build Tools helfen dabei, Code zu transpilieren und die Kompatibilität zu gewährleisten
- Teamarbeit: helfen bei der Gewährleistung der Konsistenz
### Features
- Code Minimierung
- Transpilierung
- Modulbündelung
- Automatisierung
- Linting
- Sourcemaps
## die in der Vorlesung behandelten Präprozessoren, Testing Tools, Build-Tools etc. der korrekten Kategorie zuordnen.
- IDE: Webstorm, VS Code
- Package Manager: npm
- Code Control: Git, GitLab, GitHub, Visual Studio Team Foundation Server, Bitbucket
- Code Formater: Webstorm, Prettier
- Linter: ESLint
- Testing Tools: Mocha, Chai, Sinon, Proxyquire, Jest
- E2E Testing Tools: Cypress, WebDriverIO, Percy
- Präprozessoren: TypeScript, Babel, Sass, PostCSS, Less, Stylus
- Build Tools: WebPack, Vite, Rollup, Parcel, Snowpack, Lerna, Nx
- CI Services: Jenkins, Travis CI, GitLab, Circle CI, GitHub Actions, Codeship, Semaphore, MS Build Test, TeamCity
- Server Side Rendering: Remix (React), NextJS (React), Gatsby (React), Eleventy
- Cloud DBs: Firebase, Hasura
- (Headless) CMS: Prismic.io, Magnolia, Sanity, Contentful, Notion, Airtable
- Logging und Error reporting: Sentry, Loggy, logrocket, rollbar
- Cloud Services: Azure, GCP, AWS, Heroku, Render
- CSS Frameworks: Bootstrap, Tailwind, Material UI