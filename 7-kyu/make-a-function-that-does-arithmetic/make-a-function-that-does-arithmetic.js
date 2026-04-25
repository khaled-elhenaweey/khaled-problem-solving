function arithmetic(a, b, operator){
  const methodOperator = {
    add: (a,b)=> a+b,
    subtract: (a,b)=> a-b,
    multiply: (a,b)=> a*b,
    divide: (a,b)=> a/b,
  }
  return methodOperator[operator](a,b)
}