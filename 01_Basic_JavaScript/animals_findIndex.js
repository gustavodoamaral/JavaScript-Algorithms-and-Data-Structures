// O método .findIndex()

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(element => {
  return element === 'elephant'
})

console.log(foundAnimal)
console.log(animals[7])

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
})

console.log(startsWithS)
console.log(animals[3])