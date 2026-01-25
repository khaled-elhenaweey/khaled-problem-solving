function isIsogram(str){
  const lowerStr = str.toLowerCase();
  const filteredStr = new Set (lowerStr)
  return filteredStr.size === lowerStr.length
}