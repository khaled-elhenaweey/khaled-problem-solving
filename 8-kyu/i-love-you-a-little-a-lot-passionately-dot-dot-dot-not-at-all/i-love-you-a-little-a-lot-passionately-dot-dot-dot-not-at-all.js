function howMuchILoveYou(nbPetals) {
  let loveState = ["I love you","a little","a lot","passionately","madly","not at all"];
  return loveState[(nbPetals - 1) % loveState.length];
}
​