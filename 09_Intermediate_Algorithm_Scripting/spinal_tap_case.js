function spinalCase(str) {
  //let str = str.split(/(?=[A-Z])/)
  //str = str.toString()
  //str = str.replace(/,/g, ' ')
  //str = str.replace(/[- ]+/g, "-")
  //str = str.replace(/[_ -]+/g, "-")
  
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();

}

spinalCase('The_Andy_Griffith_Show');