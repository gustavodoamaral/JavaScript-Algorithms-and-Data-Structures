// Refatorar variáveis globais fora de funções

// A variável global

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookListArr, bookName) {
  let finalBookList = []
  for(let i = 0; i < bookListArr.length; i++){
    finalBookList.push(bookListArr[i])
  };

  finalBookList.push(bookName);
  return finalBookList;

};

function remove(bookListArr, bookName) {

  let finalBookList = []

  for(let i = 0; i < bookListArr.length; i++){
    finalBookList.push(bookListArr[i])
  };

  const book_index = finalBookList.indexOf(bookName);

  if (book_index >= 0) {
    finalBookList.splice(book_index, 1);
    return finalBookList;

    };
};


add(bookList, "A Brief History of Time");

remove(bookList, "On The Electrodynamics of Moving Bodies");

remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");