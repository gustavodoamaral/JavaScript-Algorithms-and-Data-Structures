// Definir uma função construtora

// Construtores são definidos com a primeira letra do nome maiúscula para distinguir eles de outras funções que não são constructors.

// Construtores usam a palavra-chave this para definir as propriedades do objeto que eles criarão. Dentro do construtor, this referencia para um novo objeto quer vai ser criado.

// Construtores definem propriedades e comportamentos em vez de retornar valores como outras funções podem fazer.

function Dog() {
  this.name =  "Alaska",
  this.color =  "Blank",
  this.numLegs = 4;
}