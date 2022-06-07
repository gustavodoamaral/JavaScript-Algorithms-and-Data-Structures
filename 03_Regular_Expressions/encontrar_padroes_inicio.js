// Encontrar padrões ao início da string

let rickyAndCal = "Cal and Ricky both like racing.";
let calAndRicky = "Ricky and Cal both like racing.";
let calRegex = /^Cal/;
let resultTrue = calRegex.test(rickyAndCal);
let resultFalse = calRegex.test(calAndRicky);

console.log(resultTrue);
console.log(resultFalse);