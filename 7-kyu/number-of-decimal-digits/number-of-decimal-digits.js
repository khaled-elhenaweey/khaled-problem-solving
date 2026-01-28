function digits(n) {
  return n === 0 ?  1 : Math.floor(Math.log10(Math.abs(n))) + 1
}