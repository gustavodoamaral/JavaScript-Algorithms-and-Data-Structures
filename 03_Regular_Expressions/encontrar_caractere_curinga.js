// Encontrar qualquer coisa com o caractere coringa

let exampleStr = "Let's have fun with regular expressions!";
let exampleStr1 = 'The sun is out today.'
let exampleStr2 = 'without a pun makes one weak.'
let exampleStr3 = 'She got fired from the hot dog stand for putting her hair in a bun.'

let unRegex = /un./; 
let result = unRegex.test(exampleStr);

