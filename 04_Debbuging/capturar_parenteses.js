// Capturar abertura e fechamento de parênteses faltantes após uma chamada de função

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

// let result = getNine(); -> result recebe o retorno da função getNine: 9. 

// let result = getNine; -> recebe a própria função getNine. 