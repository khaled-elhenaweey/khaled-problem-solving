function findShort(s){
let words = s.split(' ')
 let shortestWord  = words[0].length
  for (word of words){
    word.length < shortestWord? shortestWord = word.length : shortestWord
  }
  return shortestWord
}