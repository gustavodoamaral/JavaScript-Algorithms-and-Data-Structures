// Encontrar caracteres com captura preguiçosa

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[1-6]*?>/;
let result = text.match(myRegex);

console.log(result)