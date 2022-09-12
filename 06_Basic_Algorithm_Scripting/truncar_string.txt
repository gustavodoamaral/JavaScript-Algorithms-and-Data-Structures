// Truncar uma string

function truncateString(str, num) {
  let truncateStr;
  if (str.length > num){
    truncateStr = str.substr(0,num)
    return truncateStr + '...';
  } 
  return str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);