// Redefinir uma propriedade herdada do construtor

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog. prototype.constructor = Dog; 

let beagle = new Dog(); 
let duck = new Bird();