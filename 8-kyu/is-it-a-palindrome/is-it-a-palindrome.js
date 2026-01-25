function isPalindrome(x) {
    let text = [...x.toLowerCase()]
    let normalText = text.join('')
    let revText = [...text].reverse().join('')
     if (normalText === revText){
         return true;
    }else {
        return false;
     }
}