function rot13(str) {
  // to convert to ROT13 cipher we have to declare a string containing all the alphabets by order  
   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const ourArr = str.split("");
   let newStr = [];
  // we wil loop through the alphabet comparing each element of our string 
   for(let i = 0; i < ourArr.length; i++){
   // we check if the element is an alphbetic character  
     if(alphabet.indexOf(ourArr[i])!== -1){
     for(let j = 0; j < alphabet.length; j++){
       if(ourArr[i] === alphabet[j]){
   // when we find the match we have to define the index of the character that shifted by 13 places   
       let newIndex;
   // we check if the shifted alphabet character is there     
         if(alphabet.indexOf(alphabet[j+13])!== -1){
            newIndex = j + 13;
         }
   // if no we have to loop again through the alphabet string to find the right index, for that we have to count from the current index untill Z, then we substract the count number from 12 (because the first index is 0)        
         else{
           let k=0
           let c=j;
           while(alphabet.indexOf(alphabet[c])!==alphabet.length - 1){
             c++;
             k++;
           }
           newIndex = 12 - k;
         }
     // we have the match and the index so we will push it to an array     
        newStr.push(alphabet[newIndex]);
       }
     // if there is no match it means the current element is a non-alphabetich character we just push the element in the array 
     }}
     else newStr.push(ourArr[i]);
   }
return newStr.join("");
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));