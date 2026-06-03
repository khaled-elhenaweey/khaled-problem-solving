function findNextSquare(sq) {
  const sqrtNum = Math.sqrt(sq)
  return Number.isInteger(sqrtNum)? Math.pow(sqrtNum + 1 ,2) : -1
}