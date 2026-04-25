function openOrSenior(data){
  return data.map(([age,handicaps]) => (age >= 55 && handicaps > 7)? 'Senior':'Open' )
}