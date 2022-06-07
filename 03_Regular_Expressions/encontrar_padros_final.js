// Encontrar padrões ao final da string

let caboose = "The last car on a train is the caboose";;
let caboose1 = "A caboose is the last car on a train"
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose); // return true
let result1 = lastRegex.test(caboose1); // return false

console.log(result, result1)