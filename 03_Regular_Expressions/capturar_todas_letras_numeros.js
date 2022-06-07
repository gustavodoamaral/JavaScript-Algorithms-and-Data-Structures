// Capturar todas as letras e números

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // captura cada letra e número individualmente
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result)