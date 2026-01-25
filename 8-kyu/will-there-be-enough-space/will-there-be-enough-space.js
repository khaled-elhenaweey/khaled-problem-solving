function enough(cap, on, wait) {
  let total = on + wait;
  if (total < cap){
    return 0
  }else{
    return total - cap
  }
}