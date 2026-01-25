function isIsogram(str){
  const lower_str = str.toLowerCase();
  const filtered_str = new Set (lower_str)
  return filtered_str.size === lower_str.length
}