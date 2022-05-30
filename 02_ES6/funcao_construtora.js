// Usar a sintaxe de classe para criar uma função construtora

class Vegetable {
  constructor(name){
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
const potato = new Vegetable('potato')

console.log(carrot.name); // Deve exibir 'carrot'