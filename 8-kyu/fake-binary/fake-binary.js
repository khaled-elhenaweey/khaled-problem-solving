function fakeBin(x){
 let binaryNum = [...x].map(num => {
switch (true) {
  case num >= 5:
    return 1
    break;
  case num < 5:
      return 0
    break;
}
 }).join('')
    return binaryNum
}