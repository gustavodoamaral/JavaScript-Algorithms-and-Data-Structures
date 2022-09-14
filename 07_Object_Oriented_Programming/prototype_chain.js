// Entender a cadeia de protótipos

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // retorna verdadeiro

Object.prototype.isPrototypeOf(Dog.prototype);