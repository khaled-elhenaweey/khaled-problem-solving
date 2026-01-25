function positiveSum(arr) {
return arr.reduce((item,current)=>{
          if(current >= 0){
              return item + current
          }else{
              current = 0
              return item + current 
          }
        },0);
}