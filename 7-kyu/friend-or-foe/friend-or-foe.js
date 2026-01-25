function friend(friends){
    let realFriend = []
    friends.forEach((person) => {
        if(person.length == 4){
          realFriend.push(person)  
        }
    });
        return realFriend;
}