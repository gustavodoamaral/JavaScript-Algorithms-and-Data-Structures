//Definir um valor padrão para o parâmetro de uma função

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2));
console.log(increment(5))