function removeEveryOther(arr){
 let cleanArr = arr.filter((item ,index) => {
    if (index % 2 === 0){
       return item;
    }
});
  return cleanArr
}
​