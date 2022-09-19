// Usar closure para evitar que propriedades de um objeto sejam modificadas externamente

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };


}