// Procurar e destruir

function destroyer(arr) {
  let args = [...arguments]
  args.shift()
  console.log(args)

  let arrDiff = arr.filter((item) => !args.includes(item));

  console.log(arrDiff);

  return arrDiff;
}

destroyer([2, 3, 2, 3], 2, 3);