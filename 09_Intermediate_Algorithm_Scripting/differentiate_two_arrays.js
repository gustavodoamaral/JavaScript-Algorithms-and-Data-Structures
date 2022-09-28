function diffArray(arr1, arr2) {
  const newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
      newArr.push(arr1[i])}
   };
      
  for(let i = 0; i < arr2.length; i++){
    if(!arr1.includes(arr2[i])){
      newArr.push(arr2[i])}
   };
   
   return newArr;
}


console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));