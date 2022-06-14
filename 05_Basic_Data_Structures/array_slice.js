// Copiar itens de um array usando slice()

function forecast(arr) {
  let todaysWeather = arr.slice(2,4)
  return todaysWeather;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));