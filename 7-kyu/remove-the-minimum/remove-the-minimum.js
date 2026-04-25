function removeSmallest(numbers) {
  const newArr =[...numbers]
  newArr.splice(newArr.findIndex(minNumber => minNumber === Math.min(...newArr)),1)
  return newArr;
}