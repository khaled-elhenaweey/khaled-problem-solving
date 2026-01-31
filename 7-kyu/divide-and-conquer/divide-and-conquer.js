function divCon(x){
  const numberTotal = arrFromat(x,'number');
  const stringTotal = arrFromat(x,'string')
  return numberTotal - stringTotal
}
​
function arrFromat(arr,type){
  return arr.filter(item => typeof item === type).reduce((item,current) => item + Number(current),0);
}