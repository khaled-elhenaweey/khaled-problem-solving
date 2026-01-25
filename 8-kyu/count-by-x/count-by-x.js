function countBy(x, n) {
  let arr = [];
  let num;
  for (let i=1; i <= n; i++){
    num = x * i
    arr.push(num)
  }
  return arr;
}