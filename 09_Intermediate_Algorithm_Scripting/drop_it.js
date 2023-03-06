/**Despachar números
Dado o array arr, faça iterações sobre ele e remova cada elemento começando do primeiro elemento (o índice 0) até que a função func retorne true quando o elemento iterado for passado através dele. */

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});