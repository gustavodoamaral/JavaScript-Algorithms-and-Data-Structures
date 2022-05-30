/* Usar atribuição de desestruturação para extrair valores de objetos

Atribuição de desestruturação é uma sintaxe especial introduzida na ES6, para atribuir nitidamente valores retirados diretamente de um objeto.

*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
