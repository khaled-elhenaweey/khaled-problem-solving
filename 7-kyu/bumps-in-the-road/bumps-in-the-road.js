function bump(x){
  return x.replaceAll('_','').length > 15 ? "Car Dead" : "Woohoo!" 
}