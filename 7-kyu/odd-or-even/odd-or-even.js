function oddOrEven(array) {
  const arrTotal = array.reduce((acc,curr)=> acc + curr,0);
  return arrTotal % 2 == 0 ? 'even' : 'odd'  
}