// Instance

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
};

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonJackson);
console.log(surgeonRomero);