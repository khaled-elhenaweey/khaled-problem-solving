function repeatStr (n, s) {
    let repeatStr = s;
  if(n > 0){
    for(let i = 1; i<n; i++){
        repeatStr += s
    }
    return repeatStr;
  }
     return '';
}