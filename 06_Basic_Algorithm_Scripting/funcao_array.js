/* Achar não é roubar
Crie uma função que olhe através do array arr e retorne o primeiro elemento dentro do array que passe pelo 'teste de verdade' ('truth test'). Isso significa que, dado um elemento x, o 'teste de verdade' é verdadeiro se func(x) é true. Se nenhum elemento passa no test, retorna undefined.*/

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
    num = arr[i]
    if(func(num) === true){
      return num
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);