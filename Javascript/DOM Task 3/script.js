// Quotes array
el.style.backgroundColor = `rgba(${bgR}, ${bgG}, ${bgB}, 0.08)`;


// append hidden first to measure size
quoteArea.appendChild(el);


// small timeout so browser calculates layout (ensure offsetWidth/Height available)
requestAnimationFrame(() => {
// rotation
const angle = randInt(-40, 40);
// small translate for a scattered look
const tx = randInt(-8, 8);
const ty = randInt(-8, 8);


// place randomly within container
placeElementRandomly(el);


// apply transform
el.style.transform = `rotate(${angle}deg) translate(${tx}px, ${ty}px)`;


// random font size
const fs = randInt(13, 20);
el.style.fontSize = fs + 'px';


// show with fade-in
requestAnimationFrame(() => el.classList.add('show'));


// optional: click a quote to remove it
el.addEventListener('click', () => {
el.classList.remove('show');
setTimeout(() => el.remove(), 300);
});
});


// keep DOM manageable
const maxQuotes = 60;
if (quoteArea.children.length > maxQuotes) {
// remove oldest (first inserted)
while (quoteArea.children.length > maxQuotes) {
quoteArea.removeChild(quoteArea.firstChild);
}
}
const quotes = [
"Life is what happens when you're busy making other plans.",
"The only impossible journey is the one you never begin.",
"In the end, we only regret the chances we didn't take.",
"Do not watch the clock. Do what it does. Keep going.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Believe you can and you're halfway there.",
"The future belongs to those who believe in the beauty of their dreams.",
"Don't let yesterday take up too much of today.",
"You miss 100% of the shots you don't take.",
"The best way to predict the future is to create it."
];


// Clear all quotes
function clearAll(){
quoteArea.innerHTML = '';
}


createBtn.addEventListener('click', createQuote);
clearBtn.addEventListener('click', clearAll);


// on resize, reposition existing quotes to keep them inside the container
window.addEventListener('resize', () => {
// small debounce
clearTimeout(window._repositionTimeout);
window._repositionTimeout = setTimeout(() => {
const quotesEls = quoteArea.querySelectorAll('.quote');
quotesEls.forEach(el => {
// if element is out of bounds, re-place it
const elRect = el.getBoundingClientRect();
const areaRect = quoteArea.getBoundingClientRect();


const relRight = elRect.right - areaRect.right;
const relBottom = elRect.bottom - areaRect.bottom;
// If any part is outside container, reposition
if (relRight > 0 || relBottom > 0 || elRect.left < areaRect.left || elRect.top < areaRect.top) {
// remove transform while placing to get accurate size
const prevTransform = el.style.transform;
el.style.transform = 'none';
placeElementRandomly(el);
el.style.transform = prevTransform;
}
});
}, 120);
});


// seed a few on load
for (let i=0;i<6;i++){
setTimeout(createQuote, i * 140);}