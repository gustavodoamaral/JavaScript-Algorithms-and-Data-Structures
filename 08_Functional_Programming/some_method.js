// Usar o método some para checar se pelo menos um elemento em um array atende a um critério

function checkPositive(arr) {

  let localArray = arr.some(function(currentValue){
    return currentValue > 0;
  })

  return localArray;

}

checkPositive([1, 2, 3, -4, 5]);