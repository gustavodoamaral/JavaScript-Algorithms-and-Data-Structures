// Repetir uma string (sem utilizar o método .repeat())

function repeatStringNumTimes(str, num) {
  let stringRepeat = ''
  if (num < 0){
    return stringRepeat
  }
  for(let i = 0; i < num; i++){
    stringRepeat += str
  }
  return stringRepeat;
}

repeatStringNumTimes("abc", 3);