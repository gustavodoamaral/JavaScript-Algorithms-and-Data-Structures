/*

A fileira do DNA está sem o elemento de que faz par com ele. Escreva uma função que corresponda aos pares de base que faltam para a fileira de DNA fornecida. Para cada caractere na string fornecida, encontre o caractere de par de bases. Retorne os resultados em um array bidimensional.

*/

function pairElement(str) {
  //junta cada caractere com seu par 
  let matchWithBasePair = function (char, pairedArray) {
    switch (char) {
      case "A":
        pairedArray.push(["A", "T"]);
        break;
      case "T":
        pairedArray.push(["T", "A"]); 
        break;
      case "C":
        pairedArray.push(["C", "G"]);
        break;
      case "G": 
        pairedArray.push(["G", "C"]);
        break;
    }
  };
  

  //encontra o par de cada caractere da string
  const paired = []; 
  for (let i = 0; i < str.length; i++) {
    matchWithBasePair(str[i], paired);
  }

  return paired;
}

pairElement("GCG");