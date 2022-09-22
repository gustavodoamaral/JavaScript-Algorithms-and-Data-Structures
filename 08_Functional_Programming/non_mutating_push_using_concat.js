// Adicionar elementos ao final de um array usando concat em vez de push

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);

}

const first = [1, 2, 3];
const second = [4, 5];

console.log(nonMutatingPush(first, second))

console.log(first)
console.log(second)