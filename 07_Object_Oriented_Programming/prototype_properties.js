// Usar propriedades de protótipos para reduzir código duplicado

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");