// Usar getters e setter para controlar acesso a um objeto

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Definição na escala Fahrenheit
let temp = thermos.temperature; // 24,44 em Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 em Celsius