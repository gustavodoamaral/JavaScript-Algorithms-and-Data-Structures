/*A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo valor.*/

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum){
    return [startNum]
  }else {
    let numbers = rangeOfNumbers(startNum, endNum -1)
    numbers.push(endNum)
    return numbers
  }
};

console.log(rangeOfNumbers(1, 5))
console.log(rangeOfNumbers(6, 9))
console.log(rangeOfNumbers(4, 4))