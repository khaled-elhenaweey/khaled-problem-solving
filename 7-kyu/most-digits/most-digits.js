function findLongest(array){
  return array.reduce((acc, curr) => {
    return String(curr).length > String(acc).length ? curr : acc;
  });
}