function betterThanAverage(classPoints, yourPoints) {
  let avg = (classPoints.reduce((a,b)=>a+b,0)) / classPoints.length
  if (avg < yourPoints){
    return true
  }else {
    return false
  }
}
​