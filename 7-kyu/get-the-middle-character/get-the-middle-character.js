function getMiddle(string) {
  const strLength = string.length;
  const strMid = Math.floor(strLength / 2);
  return strLength % 2 === 0 ? string.slice(strMid - 1 ,strMid + 1) : string.charAt(strMid)
}