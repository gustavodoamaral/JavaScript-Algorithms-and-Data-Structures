// Evitar mutações e efeitos colaterais usando programação funcional

// A variável global
let fixedValue = 4;

function incrementer() {
  let finalValue = fixedValue
  finalValue+=1
  return finalValue
};

console.log(incrementer(fixedValue))