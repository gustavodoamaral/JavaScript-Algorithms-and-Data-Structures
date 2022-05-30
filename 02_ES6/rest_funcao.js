// Usar o parâmetro rest com parâmetros de função

const sum = (...args) => {
  let value = 0;
  args = [...args];
  args.reduce(function(acumulador, valorAtual) {
   return value = acumulador + valorAtual;
 }, 0);
 return value;
}

console.log(sum(0,1,2))