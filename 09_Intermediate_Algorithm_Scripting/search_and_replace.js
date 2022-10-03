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

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");