function XO(str) {
  function letterNumber(letter){
    return [...str].filter(char => char.toLowerCase() == letter).length
  }
  const xNumbers = letterNumber('x')
  const oNumbers = letterNumber('o')
  return xNumbers == oNumbers ? true : false
}