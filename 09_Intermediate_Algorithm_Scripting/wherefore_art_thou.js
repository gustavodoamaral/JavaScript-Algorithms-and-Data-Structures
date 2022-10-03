// Localizar por valor

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => sourceKeys
  .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  .reduce((a, b) => a && b))
};

whatIsInAName([{ first: "Romeo", last: "Montague" }, 

{ first: "Mercutio", last: null }, 

{ first: "Tybalt", last: "Capulet" }], 

{ last: "Capulet" });
