function solution(str){
 if(str.length <= 1) return str
 let reverseStr = [...str].reverse().join('')
 return reverseStr
}
​
​