document.body.insertAdjacentHTML('beforeend',
    '<span' +
    ' style=\'position:fixed;top:50vh;left:10px;font-size:3em;background-color:lightgoldenrodyellow;opacity:0.7\'></span>');
const divElem = document.body.lastElementChild;
const showSize = () => (divElem.innerText = 'W: ' + String(window.innerWidth) +
    '(' + (window.innerWidth / 16).toFixed(1) + 'rem) x H: ' +
    String(window.innerHeight));
window.addEventListener('resize', showSize);
showSize();
