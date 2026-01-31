function divCon(x){
 return x.reduce((acc,current) =>  typeof current === 'number' ? acc + current : acc - Number(current),0)
}
​