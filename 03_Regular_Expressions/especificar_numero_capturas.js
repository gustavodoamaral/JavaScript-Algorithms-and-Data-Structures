// Especificar o número de capturas

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Altere esta linha
let result = ohRegex.test(ohStr);