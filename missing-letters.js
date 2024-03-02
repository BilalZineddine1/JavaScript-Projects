function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(str[0]);
  if(index === -1) return;
  const lgStr = str.length ;
  let i = 1;
  index++;
  while(i < lgStr){
    if(str[i]!== alphabet[index]) return alphabet[index];
    index++;
    i++;
  }
  return;
}
console.log(fearNotLetter(""));