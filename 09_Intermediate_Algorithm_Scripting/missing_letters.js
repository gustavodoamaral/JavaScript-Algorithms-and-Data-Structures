/*Encontrar as letras faltando
Encontre a letra que falta no intervalo de letras passado e devolva-a.

Se todas as letras estiverem presentes no intervalo, retorne undefined.*/

function fearNotLetter(str) {

  let alphabetSequence = "abcdefghijklmnopqrstuvwxyz"

  if (alphabetSequence.includes(str)){
    return undefined
  } else {

    let strLastLetter = str.slice(-1)
    let strFirstLetter = str.charAt(0)
    
    let newStr = alphabetSequence.slice(alphabetSequence.indexOf(strFirstLetter), alphabetSequence.indexOf(strLastLetter) +1);

    for(let i = 0; i < newStr.length; i++){
      if(!str.includes(newStr[i])){
        return newStr[i]
      }
    }
  };
};

fearNotLetter("abce");