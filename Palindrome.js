function palindrome (str){
    if (str.length <= 1) {
    return true;
  }
 if (str[0] === str[str.length - 1]) {
    return palindrome(str.slice(1, -1));
  } 
  else {
    return false;
  }
}
console.log(palindrome("gag")); 
console.log(palindrome("hello"));   
console.log(palindrome("kayak"));