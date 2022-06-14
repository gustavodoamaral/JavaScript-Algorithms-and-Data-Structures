// Ter cuidado quando reinicializar variáveis dentro de laços

function zeroArray(m, n) {
  // Cria um array 2-D com m linhas e n colunas de zeros
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    };
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
