var isAnagram = function(test, original) {
  if (test.length !== original.length) return false;
  return textFormat(test) === textFormat(original) 
};
​
function textFormat(text){
  return [...text.toLowerCase()].sort().join('')
}
​