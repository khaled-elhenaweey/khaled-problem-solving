function alphabetWar(fight){
  let result = 0;
  const scores = {
    'w': 4, 'p': 3, 'b': 2, 's': 1,
    'm': -4, 'q': -3, 'd': -2, 'z': -1
   };
  
  for (let char of fight){
    result += scores[char] || 0
  }
​
  if(result > 0) return "Left side wins!"
  if (result < 0) return "Right side wins!"
  return "Let's fight again!"
}