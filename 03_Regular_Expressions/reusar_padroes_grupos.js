//Reusar padrões com grupos de captura

let repeatNum = "42 42 42";
let reRegex = /^(\d*)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);

console.log(repeatNum.match(reRegex));
console.log(result)