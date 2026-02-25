function gimme (triplet) {
  const centerItem = [...triplet].sort((a,b)=> a-b)[1];
  return triplet.indexOf(centerItem)
}