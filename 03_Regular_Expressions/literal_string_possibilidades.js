// Buscar uma string literal com diferentes possibilidades

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);