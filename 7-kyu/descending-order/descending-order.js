function descendingOrder(n){
 return Number([...String(n)].sort((num_1, num_2) => num_2 - num_1).join(''))
}