function findAverage(array) {
  if (array.length === 0) return 0;
  return  array.reduce((item,current) => item + current,0) / array.length;
}