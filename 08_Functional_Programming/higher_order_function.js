const squareList = arr => {
  
  let filteredList = arr.filter(function(number) {
    return number > 0 && Number.isInteger(number)
  }); 

  console.log(filteredList)

  const squared = filteredList.map(function(obj) {
    return Math.pow(obj, 2)
  })

  console.log(squared)
  return squared

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);