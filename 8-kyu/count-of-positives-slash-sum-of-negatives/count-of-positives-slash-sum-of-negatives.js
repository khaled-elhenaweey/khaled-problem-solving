function countPositivesSumNegatives(input) {
  let positiveCount = [];
  let negativeSum = 0;
  if(input == null || input == []){↔}else{
    input.filter(number => {
      if( number > 0 ){
         positiveCount.push(number)
      }else{
         negativeSum += number
      }
     })
     if (positiveCount.length == 0 && negativeSum == 0 ){
        return []
        }
     return [positiveCount.length, negativeSum]
  }
}