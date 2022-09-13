// Verificar o construtor de um objeto com instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(2)

// retorna true
myHouse instanceof House;