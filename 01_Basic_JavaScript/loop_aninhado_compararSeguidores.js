// Loop aninhado / comparar seguidores

bobsFollowers = ['Duda', 'Gustavo', 'Eduardo', 'Ana']
tinasFollowers = ['Mayara', 'Eduardo', 'Ana']
mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}

console.log(mutualFollowers)