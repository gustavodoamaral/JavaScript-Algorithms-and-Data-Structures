// Capturar caracteres que aparecem uma ou mais vezes seguidas

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; 
let result = difficultSpelling.match(myRegex);

console.log(result)