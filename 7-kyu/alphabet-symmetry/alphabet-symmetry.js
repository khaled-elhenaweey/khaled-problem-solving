function solve(arr){  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  return arr.map( word =>{
   return [...word.toLowerCase()].reduce((count,char,index) => {
      return index === alphabet.indexOf(char)? count + 1 : count
    },0)
  })
};