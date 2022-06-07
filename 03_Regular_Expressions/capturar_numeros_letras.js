// Capturar números e letras do alfabeto - regex intervalo com hífen (-)

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 

// Flag 'i' verifica o match tanto com letras maísculas quanto minúsculas. Flag 'g' verifica todas as palavras da string. 