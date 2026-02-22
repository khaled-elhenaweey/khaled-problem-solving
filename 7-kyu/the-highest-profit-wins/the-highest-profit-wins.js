function minMax(arr){
  const arrSorted = arr.sort((a,b) => a - b)
  return arrSorted.length == 0 ? [arr[0],arr[0]] : [arr[0],arr[arrSorted.length-1]]
}