// Encontrar a palavra mais longa em uma string

function findLongestWordLength(str) {
  let arr = str.split(' ')
  let longest = arr[0]
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > longest.length){
      longest = arr[i]
    }
  }
  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");