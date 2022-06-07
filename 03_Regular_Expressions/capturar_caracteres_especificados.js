// Capturar caracteres não especificados - negar 

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // captura todos os caracteres que não são núemeros e não são vogais. 
let result = quoteSample.match(myRegex); 