// Retornar um array ordenado sem modificar o array original

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let localArray = arr.concat()
  localArray.sort(function(a,b) {
    return a-b
  })
  return localArray
};

nonMutatingSort(globalArray);