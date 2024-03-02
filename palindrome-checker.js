function palindrome(str) {
  let matchStr = str
  // for the Palindrome checker we want just to check if the word is spelled the same way both forward and backward, ignoring punctuation, case, and spacing,for that we must match our sentence or string by the method match()
    .match(/\d*[a-z]*/ig)
  // then we join the elments ,as the match() method returns an array  
    .join("")
  // transforming all the characters to lowercase  
    .toLowerCase()
  // then we split the whole string to an array of its characters  
    .split("");
  // to iterate throw the array forward and backword we need a loop and a counter "j" that intialise by the final index to compare the first and the last element and so on    
  let j = matchStr.length - 1;
  for(let i = 0; i < matchStr.length/2; i++){
  // the loop stoped if there is a nonmatch by the first and last elments and the function returns false  
    if(matchStr[i]!==matchStr[j]) return false;
    j--;
  }
 // if the loop completed then we have a plindrome 
  return true;  
}
console.log(palindrome("_eye"));