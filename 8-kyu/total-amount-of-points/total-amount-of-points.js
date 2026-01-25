function points(games) {
  let score = []
  games.map(item =>{
  [teamOne, teamTwo] = item.split(':')
        if (+teamOne > +teamTwo){
            score.push(3)
        }else if (+teamOne < +teamTwo){
             score.push(0)
        }else{
             score.push(1)
        }
    }
    );
    return score.reduce((a,c) => a+c,0);
}