// Inverter uma string

function reverseString(str) {
  let arr = [] 
  for(let i = 0; i < str.length; i++){
    arr.push(str[i])
  }
  arr.reverse()
  let string = arr.toString()
  string = string.replace(/,/g, '')
  return string

}

reverseString("hello");