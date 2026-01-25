function highAndLow(numbers){
 let arr = numbers.split(' ').sort((a,b)=>a-b)
 let arrMin = arr.slice(0,1)
 let arrMax = arr.slice(-1)
 let newNumbers = [...arrMax,...arrMin].join(" ")
 
  return newNumbers;
  
}