// Remover espaços em branco do início e do fim de strings

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "");

console.log(result)