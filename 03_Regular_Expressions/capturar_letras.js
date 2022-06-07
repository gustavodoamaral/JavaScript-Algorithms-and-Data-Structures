 //Capturar letras do alfabeto - regex intervalo de caracteres com hífen (-)

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex); 