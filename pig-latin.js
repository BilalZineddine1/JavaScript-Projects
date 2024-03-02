function translatePigLatin(str) {
  if(/^[aeiuo]/.test(str)){
    str = str + "way";
  }else if(str.indexOf(str.match(/[aeuio]/)) === -1){
    str = str + "ay"
  }else{
    str = str + str.slice(0,str.indexOf(str.match(/[aeuio]/)))+"ay";
    str = str.substring(str.indexOf(str.match(/[aeuio]/)));
  }
  return str;
}

console.log(translatePigLatin("rhythm"));