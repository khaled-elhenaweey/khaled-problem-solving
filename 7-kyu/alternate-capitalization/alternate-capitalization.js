function capitalize(s){
   const evenCap = [...s].map((char,index) => index % 2 === 0 ?  char.toUpperCase(): char).join('')
   const oddCap = [...s].map((char,index) => index % 2 !== 0 ?  char.toUpperCase(): char).join('')
   return [evenCap,oddCap];
};
​
​