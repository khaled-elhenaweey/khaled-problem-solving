function findMultiples(integer, limit) {
  let multiplesArr = [];
  let currentNumber = 0;
  for (let i = 0; i < Math.floor(limit / integer); i++){
      currentNumber += integer
      multiplesArr.push(currentNumber)
  }
  return  multiplesArr
}