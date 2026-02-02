function solve(arr){  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(word => {
  let count = 0
  const lowerWord = word.toLowerCase()
  for (let i = 0; i<lowerWord.length; i++){
    if(i === alphabet.indexOf(lowerWord[i]))count++
  }
  return count
  });
};