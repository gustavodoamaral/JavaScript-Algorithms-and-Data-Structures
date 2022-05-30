/*
Criar strings usando template literals
Use a sintaxe de template literal com crases para criar um array de strings de elementos de lista (li).
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return failureItems;
}

const failuresList = makeList(result.failure);
const successList = makeList(result.success)
const skippedList = makeList(result.skipped)

console.log(skippedList)