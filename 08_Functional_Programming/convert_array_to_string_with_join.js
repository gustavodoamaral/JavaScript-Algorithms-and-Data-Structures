// Transformar um array em uma string usando o método join

function sentensify(str) {

  return str.split(/\W/).join(" "); 

}

sentensify("May-the-force-be-with-you");