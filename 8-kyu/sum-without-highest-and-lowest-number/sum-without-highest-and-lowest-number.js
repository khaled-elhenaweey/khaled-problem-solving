function sumArray(array) {
    let result;
    if ( array == null || array.length <=2){
        return 0
    }else{
        result = array.sort((a,b)=>a-b)
        result.pop()
        result.shift()
        result.reduce((a,c)=>a+c,0)
        return result.reduce((a,c)=>a+c,0);
    }
}