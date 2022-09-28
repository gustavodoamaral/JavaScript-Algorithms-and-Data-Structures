function checkPositive(arr) {
  
  let localArray = arr.every(function(currentValue){
    return currentValue > 0
  });

  return localArray

}

console.log(checkPositive([1, 2, 3, -4, 5]));