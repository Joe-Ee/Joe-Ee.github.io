function heywhatsup(){
const quote = document.querySelector('main');

let inputQuote = document.getElementById("hii").value;
console.log("here")
const h = document.createElement('h1')
const div = document.createElement('div')

h.textContent = inputQuote;

div.append(h)

quote.append(div)
}