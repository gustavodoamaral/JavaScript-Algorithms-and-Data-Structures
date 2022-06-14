// Verificar a presença de um elemento com indexOf()

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) != -1){
    return true
  } else {
    return false
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));