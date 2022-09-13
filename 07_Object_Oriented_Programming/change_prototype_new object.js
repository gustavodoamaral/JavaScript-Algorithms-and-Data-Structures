// Mudar o protótipo para um novo objeto

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("crak crak crak")
  }, 
  describe: function() {
    console.log("My name is " + this.name)
  }
};

const hound = new Dog("Alaska")

hound.eat()
hound.describe()