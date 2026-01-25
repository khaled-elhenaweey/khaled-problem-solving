function getMiddle(str) {
  const strLength = str.length;
  const strMid = Math.floor(strLength / 2);
  return strLength % 2 === 0 ? str.slice(strMid - 1 ,strMid + 1) : str.charAt(strMid)
}