function getCount(str) {
  let vawelList = ['a','e','i','o','u'];
  let vowelCount = 0;
  str.split('').map(char => {
    if (vawelList.includes(char)){
      vowelCount += 1
    }else{
      vowelCount += 0
    }
  })
  return vowelCount;
}