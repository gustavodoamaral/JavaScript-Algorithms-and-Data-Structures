function myReplace(str, before, after) {

  if(before[0] === before[0].toUpperCase()){
    after = after.replace(after[0], after.charAt(0).toUpperCase())
  };

  if(before[0] === before[0].toLowerCase()){
    after = after.replace(after[0], after.charAt(0).toLowerCase())
  };

  let newStr = str.replace(before, after);

  return newStr;
}







//////////////////////////////////////////////////

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

let after = "julius"
let before = "tom"

//console.log(str.indexOf(strUpperCase).toLowerCase())

//let newStr = strUpperCase.charAt(0).toUpperCase() + strUpperCase.slice(1)

//let newStr = strUpperCase.replace(strUpperCase[0], strUpperCase.charAt(0).toUpperCase())

after = after.replace(after[0], after.charAt(0).toUpperCase())

console.log(after)




//console.log(str[0].toUpperCase())

//console.log(str === strUpperCase)

