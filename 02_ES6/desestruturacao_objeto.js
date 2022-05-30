/* Usar atribuição de desestruturação para atribuir variáveis de objetos

Desestruturar o permite atribuir um novo nome de variável quando extrair valores. Você pode fazer isso ao colocar o novo nome após dois pontos quando atribuir o valor.

*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;