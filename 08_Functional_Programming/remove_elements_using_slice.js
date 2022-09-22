// Remover elementos de um array usando slice em vez de splice

function nonMutatingSplice(cities) {
  return cities.slice(0,3);
};

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);