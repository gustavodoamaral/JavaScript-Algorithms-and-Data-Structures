// Prevenir laços infinitos com uma condição de término válida

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}