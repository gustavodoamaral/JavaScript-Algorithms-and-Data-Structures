/* Usar lookaheads positivos e negativos
Lookahead positivo: garantem que o padrão especificado se encontra à frente:  Usa-se (?=...)
Lookahead negativo: garantem que o padrão especificado não se encontra à sua frente na string: Usa-se (?!...)
*/
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);