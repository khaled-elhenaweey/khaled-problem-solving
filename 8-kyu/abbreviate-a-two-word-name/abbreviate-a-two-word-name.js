function abbrevName(name){
    [firstName, lastName] =  name.toUpperCase().split(' ')
    let fullName = [firstName, lastName].map(x=>x.slice(0,1)).join('.')
    return fullName;
}