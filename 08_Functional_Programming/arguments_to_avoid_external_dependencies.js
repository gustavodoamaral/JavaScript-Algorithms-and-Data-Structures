//Passar argumentos para evitar dependências externas em funções

// A variável global
let fixedValue = 4;

function incrementer(value) {
  let finalValue = value+=1
  return finalValue

};

console.log(incrementer(fixedValue));