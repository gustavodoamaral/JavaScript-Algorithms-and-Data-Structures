// Gerar números inteiros aleatórios dentro de um intervalo

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}