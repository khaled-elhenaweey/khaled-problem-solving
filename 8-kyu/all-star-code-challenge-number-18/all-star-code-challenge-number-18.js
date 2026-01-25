function strCount(str, letter){  
  let find = 0;
  [...str].map(char=>{
    if (letter == char)
    find += 1
  })
  return find
}