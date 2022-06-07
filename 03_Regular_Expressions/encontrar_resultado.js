// Encontrar mais do que o primeiro resultado - Regex

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex); 

// flag i - ignora letras maiúsculas e minúsculas
// flag g - busca/extrai um padrão além do primeiro resultado (g - global)
// é possível utilizar mais de uma flag em um regex. Ex.: gi. 