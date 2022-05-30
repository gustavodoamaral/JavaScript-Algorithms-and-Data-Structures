let count = 0;

function cc(card) {
  let decisao = ''
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++
  }else if (card === 7 || card === 8 || card === 9) {
    count += 0
  }else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A'){
    count --
  }

  if (count > 0){
    decisao = 'Bet'
  }else {
    decisao = 'Hold'
  }
  return `${count} ${decisao}`
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));