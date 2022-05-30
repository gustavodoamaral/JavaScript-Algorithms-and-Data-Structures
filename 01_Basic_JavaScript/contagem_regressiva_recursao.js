// Altere apenas o código abaixo desta linha
function countdown(n){
  if (n < 1) {
    return [];
  }
  const countArray = countdown(n - 1);
  countArray.unshift(n)
  return countArray;
}

console.log(countdown(5))