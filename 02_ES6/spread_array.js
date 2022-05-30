/*Usar o operador spread para avaliar arrays na hora
...arr retorna um array descompactado. Em outras palavras, ele espalha (spreads) o array. No entanto, o operador spread apenas funciona no local, como em um argumento para uma função ou em um array literal.

arr2 deve ser uma cópia correta de arr1.

O operador spread ... deve ser usado para duplicar arr1.

arr2 deve continuar inalterado quando arr1 é modificado.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);